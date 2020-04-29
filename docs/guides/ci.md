---
title: Continuous Integration (CI)
---

Hydra allows developers to easily integrate smart contract tests into their continuous integration workflow.

The CI server needs to support a node runtime to install the dependencies defined in the `package.json` file.
These are all dependencies that need to be installed on the CI server and running the tests works the same way as on a local machine.

However, you need to make sure that your CI server is authenticated.

## CI Authentication

Running the interactive `hydra login` command is not an option on most CI servers.
Instead, we recommend running [hydra login](../cli/cli.md#login) locally and passing the resulting JSON authentication payload as a _secure_ environment variable to the CI server.

The JSON authentication payload can be found in the `~/.hydra/auth.json` file after login. It can then be passed as the **`HYDRA_AUTH` environment variable** to the CI server.
The authentication info automatically renews expired authentication tokens as it includes a refresh token, therefore this setup only needs to be done once.

:::caution Security
Make sure your authentication info is not publicly available or leaked by your CI output.
:::

