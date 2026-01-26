#!/bin/sh
set -e

REPO=${REPO:-"YOUR_ORG/erpai-cli-releases"}
VERSION=${VERSION:-"latest"}
INSTALL_DIR=${INSTALL_DIR:-""}
BIN_NAME="erpai"
WORKER_NAME="parser.worker.js"
WASM_NAME="web-tree-sitter.wasm"

usage() {
  echo "Usage: REPO=org/repo [VERSION=vX.Y.Z] sh install.sh"
  echo "Optional: INSTALL_DIR=/custom/path"
}

if [ "$REPO" = "YOUR_ORG/erpai-cli-releases" ]; then
  echo "Set REPO=org/repo before running."
  usage
  exit 1
fi

if [ -z "$INSTALL_DIR" ]; then
  if [ "$(id -u)" -eq 0 ] || [ -w "/usr/local/bin" ]; then
    INSTALL_DIR="/usr/local/bin"
  else
    INSTALL_DIR="${HOME}/.local/bin"
  fi
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

download_asset() {
  ASSET_NAME="$1"
  TARGET_PATH="$2"
  if [ "$VERSION" = "latest" ]; then
    URL="https://github.com/${REPO}/releases/latest/download/${ASSET_NAME}"
  else
    URL="https://github.com/${REPO}/releases/download/${VERSION}/${ASSET_NAME}"
  fi
  curl -fsSL "$URL" -o "$TARGET_PATH"
}

if ! download_public; then
  echo "Download failed."
  exit 1
fi

chmod +x "/tmp/${BIN_NAME}"
mkdir -p "$INSTALL_DIR"
mv "/tmp/${BIN_NAME}" "${INSTALL_DIR}/${BIN_NAME}"

# Optional TUI assets for Tree-sitter worker
if download_asset "$WORKER_NAME" "${INSTALL_DIR}/${WORKER_NAME}"; then
  download_asset "$WASM_NAME" "${INSTALL_DIR}/${WASM_NAME}" || true
fi

echo "Installed ${BIN_NAME} to ${INSTALL_DIR}/${BIN_NAME}"
if [ "$INSTALL_DIR" = "${HOME}/.local/bin" ]; then
  echo "Add to PATH: export PATH=\"${HOME}/.local/bin:$PATH\""
fi
${BIN_NAME} --version || true
