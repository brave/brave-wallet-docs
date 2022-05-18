---
sidebar_position: 4
---

# Brave Wallet detection

We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask.

## Compatability with MetaMask

Since Brave Wallet aims to be compatible with MetaMask's exposed API, we set `window.ethereum.isMetaMask` to `true`.

## Synchronous detection

```js
const isBraveWallet = window.ethereum.isBraveWallet
console.log('Brave Wallet: ', isBraveWallet)
```

## Asynchronous detection using `web3_clientVersion`

```js
const isBraveWallet = await window.ethereum.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return clientVersion.split('/')[0] === 'BraveWallet'
  })
console.log('Brave Wallet: ', isBraveWallet)
```

Or:

```js
const isBraveWallet = await window.ethereum.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return window.ethereum.isMetaMask && clientVersion.split('/')[0] !== 'MetaMask'
  })
console.log('Brave Wallet: ', isBraveWallet)
```
