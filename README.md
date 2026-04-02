# DevKit — Lightweight Development Toolkit

A CLI toolkit for bootstrapping and managing Node.js microservices.

## Quick Start

```bash
npm run setup
```

Or step-by-step:

```bash
sh scripts/init.sh
npm install
npm run dev
```

## Usage

```bash
devkit new myservice        # scaffold new service
devkit test                 # run test suite
devkit deploy --stage dev   # deploy to staging
```

## Project Structure

```
src/
  index.js          — CLI entry point
  commands/         — Command handlers
scripts/
  init.sh           — Environment initialization
  deploy.sh         — Deployment helper
```

## Requirements

- Node.js 20+
- npm 10+
- macOS or Linux

## License

MIT
