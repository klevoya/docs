---
title: Hello Hydra
---

import Asciinema from '@site/src/components/asciinema';


[Hello Hydra](https://github.com/klevoya/hello-hydra) is an example playground to get familiar with Hydra.
It consists of a standard `eosio.token` contract and a simple test case for it.

```bash
git clone git@github.com:klevoya/hello-hydra.git
```

After installing the dependencies (`npm install`) the test in `tests/token.test.js` can be executed:

```bash
npm test
```

The test creates a token, issues some tokens to a user, who in turn transfers it to a second user.
It should result in all tests passing:

<Asciinema id="asciicast-FwQOMvxM4d6LL02ZT4b2U057t" src="https://asciinema.org/a/FwQOMvxM4d6LL02ZT4b2U057t.js" autoPlay rows={23} />

The following pages will give a detailed overview of Hydra and can be used as recipes for often used tasks.
