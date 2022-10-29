---
sidebar_position: 2
---

# Methods

## `eth_sendTransaction`

## `wallet_addEthereumChain`

`wallet_addEthereumChain` accepts a single object parameter, specified by the following TypeScript interface:

```ts
interface AddEthereumChainParameter {
  chainId: string;
  blockExplorerUrls?: string[];
  chainName?: string;
  iconUrls?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
}
```

## `wallet_switchEthereumChain`

`wallet_switchEthereumChain` accepts a single object parameter, specified by the following TypeScript interface:

```ts
interface SwitchEthereumChainParameter {
  chainId: string;
}
```


## `wallet_watchAsset`

`wallet_watchAsset` accepts a single object parameter, specified by the following TypeScript interface:

```ts
interface WatchAssetParameters {
  type: string; // The asset's interface, e.g. 'ERC20'
  options: {
    address: string; // The hexadecimal Ethereum address of the token contract
    symbol?: string; // A ticker symbol or shorthand, up to 5 alphanumerical characters
    decimals?: number; // The number of asset decimals
    image?: string; // A string url of the token logo
  };
}
```

## `eth_getEncryptionPublicKey` (deprecated)

Requests that the user shares their public encryption key. Returns a Promise that resolve to the public encryption key, or rejects if the user denied the request.

The public key is computed from entropy associated with the specified user account, using the nacl (opens new window)implementation of the X25519_XSalsa20_Poly1305 algorithm.


### Example:

#### Setup a new wallet:

```
Seed:
home various adjust motion canvas stand combine gravity cluster behave despair dove

Private key:
72d388592fb23300948c9eaf2dfaa60b8c3297903f2ea698d489d7c12116e2e6

Address is: 
0xB884707865B85990e6a140a12C3e5f5D24FE5736
```


#### Get the public key:

```js
var x= await window.ethereum.request({method:'eth_getEncryptionPublicKey', params:['0xB884707865B85990e6a140a12C3e5f5D24FE5736']})
```

Check the value of `x`:
>  `'eui9/fqCHT7aSUkKK9eooQFnOCD9COK9Mi1ZtOxIj2A='`


#### Run these commands in a test directory: 

```
npm install @metamask/eth-sig-util
npm install ethereumjs-util

And then run this script: 
```js
const ethUtil = require('ethereumjs-util');
const sigUtil  = require('@metamask/eth-sig-util');

const encryptedMessage = ethUtil.bufferToHex(
  Buffer.from(
    JSON.stringify(
      sigUtil.encrypt({
        publicKey: 'eui9/fqCHT7aSUkKK9eooQFnOCD9COK9Mi1ZtOxIj2A=',
        data: 'Ode to Anthony!',
        version: 'x25519-xsalsa20-poly1305',
      })
    ),
    'utf8'
  )
);
```

#### In UI:

If you then check the value of `encryptedMessage` you'll see:

```
'0x7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a2232666f7254336e4350425279653944654d31515375574e385776475a5670584e222c22657068656d5075626c69634b6579223a226d6a67655235324a4347446c393333367551774e3239716b62595230574c4b4367696e42504446747958593d222c2263697068657274657874223a22653378704b703276476d70643965634f6a524a36786c7456723046656f2b506d2f432f67544d437944673d3d227d'
```

You can get back at the string with:

```js
JSON.parse(Buffer.from('7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a2232666f7254336e4350425279653944654d31515375574e385776475a5670584e222c22657068656d5075626c69634b6579223a226d6a67655235324a4347446c393333367551774e3239716b62595230574c4b4367696e42504446747958593d222c2263697068657274657874223a22653378704b703276476d70643965634f6a524a36786c7456723046656f2b506d2f432f67544d437944673d3d227d', 'hex'))
```
Which gives:
```
{
  version: 'x25519-xsalsa20-poly1305',
  nonce: '2forT3nCPBRye9DeM1QSuWN8WvGZVpXN',
  ephemPublicKey: 'mjgeR52JCGDl9336uQwN29qkbYR0WLKCginBPDFtyXY=',
  ciphertext: 'e3xpKp2vGmpd9ecOjRJ6xltVr0Feo+Pm/C/gTMCyDg=='
}
```

#### Issuing the decrypt command

Finally run the decrypt command with your encrypted string:

```js
const encryptedMessage = '0x7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a2232666f7254336e4350425279653944654d31515375574e385776475a5670584e222c22657068656d5075626c69634b6579223a226d6a67655235324a4347446c393333367551774e3239716b62595230574c4b4367696e42504446747958593d222c2263697068657274657874223a22653378704b703276476d70643965634f6a524a36786c7456723046656f2b506d2f432f67544d437944673d3d227d'
ethereum
  .request({
    method: 'eth_decrypt',
    params: [encryptedMessage, '0xB884707865B85990e6a140a12C3e5f5D24FE5736']
  })
  .then((decryptedMessage) =>
    console.log('The decrypted message is:', decryptedMessage)
  )
  .catch((error) => console.log(error.message));
```

It will popup the UI to decrypt the message for the user. And if you press approve it will send it back to the Dapp. Check the JS console in dev tools to see.

## `eth_decrypt` (deprecated)

This method requests that Brave Wallet decrypts the given encrypted message.

Parameters:
- A serialized JSON object which is base64 encoded and contains amongst other things the encrypted message and the seed
- The ethereum account that can decrypt the message as the second.


If the user doesn't approve, then the operation results in an error (user rejected).
The user can peak at the data at any time to see what the encrypted blob contains before decrypting it to the dapp.
The decrypted message is only returned to the Dapp if the decrypt request is approved.
Since this is not trusted content, when decrypting the message, Brave will sanitize first, then parse the JSON object. 

The message must have been encrypted using the public encryption key of the given Ethereum address.  See also `eth_getEncryptionPublicKey`.
This method returns a Promise that resolves to the decrypted message, or rejects if the decryption attempt fails.
