---
sidebar_position: 1
---

# Brave Wallet detection

## Compatability with Phantom

Since Brave Wallet aims to be compatible with Phantom's exposed API, we set `window.braveSolana.isPhantom` to `true`.
Also `window.phantom.solana` and `window.solana` are aliases of `window.braveSolana`.

## Synchronous detection

```js
const isBraveWallet = window.braveSolana.isBraveWallet
console.log('Brave Wallet: ', isBraveWallet)
```

## Wallet adapter
Brave Wallet has its own
[BraveWalletAdapter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/wallets/brave)
and also compatible with
[PhantomWalletAdapter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/wallets/phantom).
Examples can be found [here](https://github.com/solana-labs/wallet-adapter).
