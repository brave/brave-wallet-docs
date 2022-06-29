---
sidebar_position: 1
slug: /ethereum
---

# Overview

Brave injects a `windows.ethereum` provider object on all secure sites.
Secure 1st party iframes will also have `window.ethereum` exposed but will work the same as other secure feature policies.
For more information please see [this work](https://github.com/brave/brave-browser/issues/23710).

This object is defined by [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).

The in-page provider will not be provided by Brave in private and Tor window.

This object gives websites the ability to:
- Make requests to an Ethereum node (or a compatible network) to read data from the blockchain
- Request permission to view the addresses associated with one or more of the Ethereum accounts in the user's wallet
- Ask the user (if given permission previously) to sign / submit a transaction
- Ask the user (if given permission previously) to sign a message
