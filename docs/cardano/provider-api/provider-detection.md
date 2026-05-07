---
sidebar_position: 1
---

# Brave Wallet detection

## CIP-30 wallet namespace

Per [CIP-30](https://cips.cardano.org/cip/CIP-30), each wallet implementing the standard creates a namespaced field under the shared `window.cardano` object. Brave Wallet uses the namespace `brave`, so the wallet object is available at `window.cardano.brave`.

## Synchronous detection

```js
const isBraveWallet = window.cardano?.brave != null
console.log('Brave Wallet (Cardano): ', isBraveWallet)
```

## Checking before enable

Before calling `enable()`, you can check wallet availability and optionally use `isEnabled()` to see if the dApp is already connected:

```js
if (window.cardano?.brave) {
  const alreadyConnected = await window.cardano.brave.isEnabled()
  if (alreadyConnected) {
    const api = await window.cardano.brave.enable()
    // Use api...
  }
}
```
