# ERP•AI CLI

AI-powered command-line interface for your ERP data. Ask in English, get streamed answers.

This repo hosts the signed release binaries and the download landing page for the `erpai` CLI. For usage and the source home, see [`erphq/erpai-cli`](https://github.com/erphq/erpai-cli).

## Quick install

```sh
curl -fsSL https://install.erpai.dev/install.sh | sh
```

The installer platform-detects your OS/arch and pulls the latest signed binary from GitHub Releases onto your `PATH`. For a specific version or a different install dir:

```sh
curl -fsSL https://install.erpai.dev/install.sh | VERSION=v0.1.12 INSTALL_DIR="$HOME/.local/bin" sh
```

## Getting started

1. **Install the CLI** — run the command above.
2. **Log in** — `erpai login`.
3. **Start chatting** — `erpai chat`.

## Manual download

Binaries for macOS (arm64 / x64), Linux (x64), and Windows (x64) are attached to each [release](https://github.com/erphq/erpai-cli-releases/releases), alongside a `sha256.txt` checksum file.

## Website development

This repo also contains the Next.js landing page (deployed to `install.erpai.dev` via Vercel). The installer is served from `public/install.sh`.

```sh
npm install
npm run dev
```

## Requirements

- macOS (Apple Silicon or Intel)
- Linux (x64)
- Windows (x64)
- An ERP•AI account

## Links

- [ERP•AI platform](https://erp.ai)
- [Documentation](https://erp.ai/docs)
- [CLI source](https://github.com/erphq/erpai-cli)
