---
title: CLI
---

The Inspect vulnerability scanner can be accessed through a CLI which can be installed and updated from the NPM registry:

```bash
npm install --global @klevoya/inspect
```

# help

The `help` command prints the current Inspect version and a description of commands that can be run.

```bash
inspect help
inspect help <command>

# Example
inspect help check
```

# login

Inspect requires an account to use the public Inspect server for executing commands.
Creating an account or authenticating Inspect with an existing account is done by running the `login` command:

```bash
inspect login
# should open a browser window to log in / sign up
```

Authenticating with Inspect stores the login information in `~/.inspect/auth.json`.
This file should be kept safe as it includes the authentication token.

# logout

The `logout` command deletes the `~/.inspect/auth.json` file.

```bash
inspect logout
```

# check

The `check` command queues a smart contract for analysis.
Only the compiled version (WebAssembly) of a smart contract is needed, its C++ source code is not required and never uploaded.

#### Arguments

| Option               | Description                                       |
| -------------------- | ------------------------------------------------- |
| `contract-wasm-path` | path to a compiled EOSIO `.wasm` WebAssembly file |

```bash
inspect check <contract-wasm-path>

# Example
inspect check ~/my-contracts/test/build/test.wasm
```

# reports

The `reports` command lists all finished analysis reports.

#### Optional Arguments

It optionally accepts a single report ID to view instead.

| Option      | Description             |
| ----------- | ----------------------- |
| `report-id` | ID of a report to view |

```bash
inspect reports [report-id]

# Examples
inspect reports
inspect reports 123
```

# clear

The `clear` command deletes previous reports.

#### Optional Arguments

By default, the command deletes all reports. It optionally accepts a list of report IDs to delete.

| Option      | Description             |
| ----------- | ----------------------- |
| `report-ids` | A list of report IDs to delete |

```bash
inspect clear [report-id1 report-id2 ...]

# Examples
inspect clear # deletes all reports
inspect clear 123 321 456
```
