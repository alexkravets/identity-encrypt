# @kravc/identity-encrypt

Encryption utility for [@kravc/identity](https://github.com/alexkravets/identity).

## Usage Example

Install npm package:

```sh
npm i --save @kravc/identity-encrypt
```

Encrypt object with public key:

```js
const { encrypt } = require('@kravc/identity-encrypt')

const encryptedBody = await encrypt(publicKeyHex, [ signedCredential ])
console.log(encryptedBody)
```

Decrypt message with private key:

```js
const { decrypt } = require('@kravc/identity-encrypt')

const [ signedCredential ] = await decrypt(privateKeyHex, encryptedBody)
console.log(signedCredential)
```
