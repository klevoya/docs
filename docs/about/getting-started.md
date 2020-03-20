---
title: Getting Started
---

Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.
Besides Hydra, installing additional software or running your own local blockchain node are **not** required. 

## Quick Start

### Setup

Hydra is a Node.js library, so make sure [Node.js/NPM](https://nodejs.org/en/download/) is installed.

```bash
npm i -g @klevoya/hydra
```

Log in to your existing [Klevoya account](https://klevoya.com) or sign up by running the `login` command and following the instructions:

```bash
hydra login
```


import Asciinema from '@site/src/components/asciinema';

<Asciinema id="asciicast-nhP4pvp7hv6L6FFJu4kyUYHzc" src="https://asciinema.org/a/nhP4pvp7hv6L6FFJu4kyUYHzc.js" autoPlay />


### Writing tests

Hydra tests are written in JavaScript/TypeScript and it allows you to use your favourite testing library.

Navigate to your smart contracts project's root folder and compile your smart contract.
Initialize an NPM project, install a JS testing library and then run the `init` command selecting the contracts you want to test.

```bash
cd eos-project
npm init -y
# Install jest or another testing library
npm i -S jest
# adjust the "test" script in package.json to execute "jest"

hydra init
```

<Asciinema id="asciicast-u4CCaH93v6Hti0VBP8gErgskT" src="https://asciinema.org/a/u4CCaH93v6Hti0VBP8gErgskT.js"/>

The `init` command bootstraps your project by creating a `hydra.yml` configuration file and a test boilerplate in the `tests` directory.
Then run your tests:

```bash
npm test
```



