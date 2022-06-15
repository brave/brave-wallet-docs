---
sidebar_position: 1
---

# Brave Wallet detection

## Compatability with Phantom

Since Brave Wallet aims to be compatible with Phantom's exposed API, we set `window.solana.isPhantom` to `true`.

## Synchronous detection

```js
const isBraveWallet = window.solana.isBraveWallet
console.log('Brave Wallet: ', isBraveWallet)
```
