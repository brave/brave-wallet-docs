---
sidebar_position: 1
---

# Overview

Brave injects a `windows.ethereum` provider object on all pages.  
This object is defined by [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).

The in page provider will not be provided by Brave in private and Tor window.

This object gives websites the ability to:
- Make requests to an Ethereum node (or a compatible network) to read data from the blockchain
- Request permission to 1 or more Ethereum accounts
- Ask the user (if given permission previously) to sign / submit a transaction
- Ask the user (if given permission previously) to sign a message
