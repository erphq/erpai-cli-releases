#!/bin/sh
set -e

REPO=${REPO:-"erphq/erpai-cli-releases"}
VERSION=${VERSION:-"latest"}
INSTALL_DIR=${INSTALL_DIR:-"/usr/local/bin"}
BIN_NAME="erpai"

echo "Installing ERP·AI CLI..."

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
    echo "Error: Unsupported OS: $OS"
    exit 1
    ;;
esac

echo "Detected: ${OS} ${ARCH}"
echo "Downloading: ${ASSET}"

# Build download URL
if [ "$VERSION" = "latest" ]; then
  URL="https://github.com/${REPO}/releases/latest/download/${ASSET}"
else
  URL="https://github.com/${REPO}/releases/download/${VERSION}/${ASSET}"
fi

# Download the binary
if ! curl -fsSL "$URL" -o "/tmp/${BIN_NAME}" 2>/dev/null; then
  echo ""
  echo "Error: Failed to download ${ASSET}"
  echo ""
  echo "This could mean:"
  echo "  - No binary available for your platform (${OS}-${ARCH})"
  echo "  - The release doesn't exist"
  echo ""
  echo "Available at: https://github.com/${REPO}/releases"
  exit 1
fi

chmod +x "/tmp/${BIN_NAME}"

# Try to install to INSTALL_DIR, fall back to ~/.local/bin
if [ -w "$INSTALL_DIR" ] || [ -w "$(dirname "$INSTALL_DIR")" ]; then
  mkdir -p "$INSTALL_DIR"
  mv "/tmp/${BIN_NAME}" "${INSTALL_DIR}/${BIN_NAME}"
  echo ""
  echo "Installed ${BIN_NAME} to ${INSTALL_DIR}/${BIN_NAME}"
else
  # Fall back to ~/.local/bin
  INSTALL_DIR="$HOME/.local/bin"
  mkdir -p "$INSTALL_DIR"
  mv "/tmp/${BIN_NAME}" "${INSTALL_DIR}/${BIN_NAME}"
  echo ""
  echo "Installed ${BIN_NAME} to ${INSTALL_DIR}/${BIN_NAME}"
  echo ""
  echo "Add to PATH if needed:"
  echo "  export PATH=\"\$HOME/.local/bin:\$PATH\""
fi

echo ""
${INSTALL_DIR}/${BIN_NAME} --version 2>/dev/null || echo "Run: ${BIN_NAME} --version"
