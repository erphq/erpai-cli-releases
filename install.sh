#!/bin/sh
set -e

REPO=${REPO:-"YOUR_ORG/erpai-cli-releases"}
VERSION=${VERSION:-"latest"}
INSTALL_DIR=${INSTALL_DIR:-"/usr/local/bin"}
BIN_NAME="erpai"

usage() {
  echo "Usage: REPO=org/repo [VERSION=vX.Y.Z] sh install.sh"
  echo "Optional: INSTALL_DIR=/custom/path"
}

if [ "$REPO" = "YOUR_ORG/erpai-cli-releases" ]; then
  echo "Set REPO=org/repo before running."
  usage
  exit 1
fi

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

download_public() {
  if [ "$VERSION" = "latest" ]; then
    URL="https://github.com/${REPO}/releases/latest/download/${ASSET}"
  else
    URL="https://github.com/${REPO}/releases/download/${VERSION}/${ASSET}"
  fi
  curl -fsSL "$URL" -o "/tmp/${BIN_NAME}"
}

if ! download_public; then
  echo "Download failed."
  exit 1
fi

chmod +x "/tmp/${BIN_NAME}"
mkdir -p "$INSTALL_DIR"
mv "/tmp/${BIN_NAME}" "${INSTALL_DIR}/${BIN_NAME}"

echo "Installed ${BIN_NAME} to ${INSTALL_DIR}/${BIN_NAME}"
${BIN_NAME} --version || true
