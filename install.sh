#!/bin/sh
set -e

REPO=${REPO:-"ERPdotAI/erpai-cli-releases"}
VERSION=${VERSION:-"latest"}
INSTALL_DIR=${INSTALL_DIR:-"/usr/local/bin"}
BIN_NAME="erpai"

usage() {
  echo "Usage: curl -fsSL https://raw.githubusercontent.com/ERPdotAI/erpai-cli-releases/main/install.sh | sh"
  echo "Optional: VERSION=vX.Y.Z INSTALL_DIR=/custom/path sh install.sh"
}

OS="$(uname -s | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "$ARCH" in
  x86_64) ARCH="x64" ;;
  aarch64|arm64) ARCH="arm64" ;;
esac

case "$OS" in
  darwin) ASSET="erpai-darwin-${ARCH}" ;;
  linux) ASSET="erpai-linux-${ARCH}" ;;
  msys*|mingw*|cygwin*) ASSET="erpai-windows-x64.exe" ;;
  *)
    echo "Unsupported OS: $OS"
    exit 1
    ;;
esac

download_with_gh() {
  if command -v gh >/dev/null 2>&1; then
    if gh auth status >/dev/null 2>&1; then
      gh release download "$VERSION" -R "$REPO" -p "$ASSET" -O "/tmp/${BIN_NAME}"
      return 0
    fi
  fi
  return 1
}

download_with_token() {
  if [ -z "$GITHUB_TOKEN" ]; then
    return 1
  fi
  if [ "$VERSION" = "latest" ]; then
    URL="https://github.com/${REPO}/releases/latest/download/${ASSET}"
  else
    URL="https://github.com/${REPO}/releases/download/${VERSION}/${ASSET}"
  fi
  curl -fsSL -H "Authorization: token ${GITHUB_TOKEN}" "$URL" -o "/tmp/${BIN_NAME}"
}

download_public() {
  if [ "$VERSION" = "latest" ]; then
    URL="https://github.com/${REPO}/releases/latest/download/${ASSET}"
  else
    URL="https://github.com/${REPO}/releases/download/${VERSION}/${ASSET}"
  fi
  curl -fsSL "$URL" -o "/tmp/${BIN_NAME}"
}

if ! download_with_gh; then
  if ! download_with_token; then
    if ! download_public; then
      echo "Download failed."
      echo "If the repo is private, authenticate with:"
      echo "1) gh auth login"
      echo "2) GITHUB_TOKEN with repo access"
      exit 1
    fi
  fi
fi

chmod +x "/tmp/${BIN_NAME}"
mkdir -p "$INSTALL_DIR"
mv "/tmp/${BIN_NAME}" "${INSTALL_DIR}/${BIN_NAME}"

echo "Installed ${BIN_NAME} to ${INSTALL_DIR}/${BIN_NAME}"
${BIN_NAME} --version || true
