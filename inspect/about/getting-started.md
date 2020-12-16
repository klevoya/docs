---
title: Getting Started
---

import Asciinema from '@site/src/components/asciinema';

**Inspect** is an automated vulnerability scanner for your EOSIO smart contracts.
Inspect makes finding vulnerabilities in your EOSIO smart contracts easy to do within your development workflow. Giving you peace of mind before you deploy on-chain.

## Quick Start

### Setup

Inspect is currently accessible through a **CLI**.
This CLI is a Node.js library, so make sure [Node.js/NPM](https://nodejs.org/en/download/) is installed.

```bash
npm i -g @klevoya/inspect
```

Log in to your existing [Klevoya account](https://klevoya.com) or sign up by running the `login` command and following the instructions:

```bash
inspect login
```


### Scan smart contracts for vulnerabilities

Once logged in to the CLI, you can analyse your compiled `.wasm` smart contracts by running the `inspect check` command.
This uploads the compiled smart contract to our server and queues an analysis.

```bash
inspect check /path/to/contract.wasm
```


### Checking reports

The analysis of large contracts can take several minutes.
Each report can be reviewed individually at any time by running the `inspect reports` command.

```bash
inspect reports # lists all reports
inspect reports 123 # lists the report with the specified report id
```

The result will be a list of potential traces that have been found for [common EOSIO vulnerabilities](https://github.com/klevoya/eosio-wcr-registry).

<!-- <Asciinema id="asciicast-PAxoLGM4Qck2APSvquLFcAN4T" src="https://asciinema.org/a/PAxoLGM4Qck2APSvquLFcAN4T.js"/> -->
