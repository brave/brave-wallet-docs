---
sidebar_position: 4
---

# Wallet detection

We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask.

Detecting Brave:

Since Brave Wallet aims to be compatible with MetaMask's exposed API we set `window.ethereum.isMetaMask` to `true`.
However, one can use `web3_clientVersion` to check for Brave Wallet.

```js
const isBraveWallet = await window.ethereum.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return window.ethereum.isMetaMask && clientVersion.split('/')[0] !== 'MetaMask'
  })
console.log('Brave Wallet: ', isBraveWallet)
```
