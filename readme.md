# aes-cryptojs

## Install

```sh
npm i aes-cryptojs
# or
yarn add aes-cryptojs
```

# How to encrypt ?

```js
import { encrypt } from "aes-cryptojs";

let data = {
  key: `value`
};

data = encrypt(data, {
  iv: `abcde`,
  secret: `123456`
});
```

# How to decrypt ?

```js
import { decrypt } from "aes-cryptojs";

let data = await http("to request");

data = decrypt(data, {
  iv: `abcde`,
  secret: `123456`
});
```
