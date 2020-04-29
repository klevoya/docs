---
title: CLI
---

The Hydra CLI and its testing library both live within the same package which can be installed and updated from the NPM registry:

```bash
npm install --global @klevoya/hydra
```

# help

The `helps` command prints the current Hydra version and a description of commands that can be run.

```bash
hydra help
hydra help <command>
hydra help init
```

# login

Hydra requires an account to use the public Hydra server for executing commands.
Creating an account or authenticating Hydra with an existing account is done by running the `login` command:

```bash
hydra login
# should open a browser window to log in / sign up
```

Authenticating with hydra stores the login information in `~/.hydra/auth.json`.
This file should be kept safe as it includes the authentication token.

:::note Running Hydra in a CI pipeline
When running tests as part of your Continous Integration workflow, the CI server needs to be authenticated as well. See the [section on CI](../guides/ci.md) for more information.
:::

# logout

The `logout` command deletes the `~/.hydra/auth.json` file.

```bash
hydra logout
```

# init

A scaffolding command creating the [configuration file](./config.md), the boilerplate test files, and optionally [JSON fixture files](../examples/initial-contract-tables.md).
It's safe to run the `init` command repeatedly to update projects files as the configuration will be merged and test files will not be overwritten.

#### Options

| Option                   | Shorthand | Description                               | Default                   |
| ------------------------ | --------- | ----------------------------------------- | ------------------------- |
| `--contracts-dir <path>` | `-c`      | path to search for compiled contracts     | current working directory |
| `--typescript`           |           | use TypeScript for boilerplate test files | off                       |

```
hydra init
hydra init --contracts-dir contracts
```
