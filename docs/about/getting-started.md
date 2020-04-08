---
title: Getting Started
---

import Asciinema from '@site/src/components/asciinema';

Hydra is an EOSIO smart contract testing framework that allows you to quickly get started with testing your smart contract code.
Besides Hydra, installing additional software or running your own local blockchain node is **not** required. 

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


<Asciinema id="asciicast-nhP4pvp7hv6L6FFJu4kyUYHzc" src="https://asciinema.org/a/nhP4pvp7hv6L6FFJu4kyUYHzc.js" autoPlay />


### Writing tests

Hydra tests are written in JavaScript/TypeScript using a JavaScript testing library of your choice.

Navigate to your contract project's root folder and compile your smart contract.
After that, run the `hydra init` command selecting the contracts you want to test.
It will initialize an NPM project and set up a JavaScript testing library ([jest](https://jestjs.io/)).

```bash
cd eos-project

hydra init
```

<Asciinema id="asciicast-PAxoLGM4Qck2APSvquLFcAN4T" src="https://asciinema.org/a/PAxoLGM4Qck2APSvquLFcAN4T.js"/>

The `init` command also bootstraps your project by creating a `hydra.yml` configuration file and a test boilerplate in the `tests` directory.
Then run your tests:

```bash
npm test
```

<Asciinema id="asciicast-kNeDMxCjx1zZM4AtjFwhxilsE" src="https://asciinema.org/a/kNeDMxCjx1zZM4AtjFwhxilsE.js" autoPlay />
