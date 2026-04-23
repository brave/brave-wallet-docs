---
sidebar_position: 1
slug: /cardano
---

# Overview

Brave Wallet implements the [Cardano dApp-Wallet Web Bridge (CIP-30)](https://cips.cardano.org/cip/CIP-30) specification, which defines a webpage-based communication bridge allowing dApps to interface with Cardano wallets.

Brave injects a `window.cardano` provider object on secure sites [in these cases](/provider-availability). Under this namespace, Brave Wallet exposes its API at `cardano.brave`.

This object gives websites the ability to:
- Request user permission to connect and access wallet information
- Read data from the user's wallet (addresses, UTXOs, balance)
- Ask the user to sign transactions
- Ask the user to sign arbitrary data (CIP-8)
- Submit transactions to the network

Developers can access the Cardano APIs via the JavaScript object. First, call `enable()` to request user permission and obtain the full API:

```js
const api = await cardano.brave.enable();
```

Once enabled, the returned `api` object provides methods such as `getNetworkId()`, `getUtxos()`, `getBalance()`, `signTx()`, `signData()`, and `submitTx()` for dApp-wallet interactions.
