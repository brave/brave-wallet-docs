---
sidebar_position: 1
---

# Brave Wallet detection

## Compatability with Phantom

Since Brave Wallet aims to be compatible with Phantom's exposed API, we set `window.solana.isPhantom` to `true`.
And `window.solana` is an alias of `window.braveSolana`.

## Synchronous detection

```js
const isBraveWallet = window.braveSolana.isBraveWallet
console.log('Brave Wallet: ', isBraveWallet)
```

## Wallet adapter
Example can be found [here](https://github.com/solana-labs/wallet-adapter)
