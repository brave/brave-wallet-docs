---
sidebar_position: 3
---

#Properties

## Compatibility
`window.solana` is an alias of `window.braveSolana` which should be used mainly.


## `braveSolana.publicKey`

It will return `null` when wallet is not connected, otherwise [solanaWeb3.PublicKey](https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html)
of selected account will be returned.

## `braveSolana.isConnected`

It will return `true` when current page is connected, `false` otherwise. Note
that same site on different tabs have different connected state.
