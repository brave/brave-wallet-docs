---
sidebar_position: 1
slug: /solana
---

# Overview

Brave creates Ed25519 keypairs following
[SLIP-0010](https://github.com/satoshilabs/slips/blob/master/slip-0010.md) with
derivation path `m/44'/501'/{index}'/0'` for each accounts in
[BIP44](https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki)

Brave injects a `window.braveSolana` provider object on all pages. However it will
not be accessible in private and Tor window. Alias `window.solana` is kept for
compatibility.

dApps can use this provider object to:
- Request user permission to share public key (Establish a connection)
- Ask the user to sign and submit a transactions (if connected)
- Ask the user to sign a transaction or multiple transactions (if connected)
- Ask the user to sign a message (if connected)
