---
sidebar_position: 3
---

import AddChain from '../../src/components/AddChain'

# Custom chains

You can add custom networks by navigating to `brave://settings/wallet/networks`
and clicking on the "Add" button. You can enter the network details manually or
search through a list of networks sourced from [chainlist.org](https://chainlist.org).
This list is updated on a daily basis and served through user data files of
the browser.

**Troubleshooting note:** Normally, a browser restart is enough to ensure that
you're using the latest networks list, if not already the case. Alternatively,
you can force-check for new updates by going to `brave://components` and
clicking on "Check for update" under "Brave Wallet data files".

You can also add custom chains through sites like [chainlist.org](https://chainlist.org).
Examples of the UX for adding custom chains through external websites can be
found below:

| Chain ID    | Name                 | Native currency | Decimals | Add    |
| ----------- | -------------------- | --------------- | -------- | ------ |
| 0xa4b1      | Arbitrum One         | AETH            | 18       | <AddChain decimals={18} chainId='0xa4b1' symbol='AETH' chainName='Arbitrum One' rpcUrl='https://arb1.arbitrum.io/rpc' blockExplorerUrl='https://arbiscan.io' />
| 0x2105      | Base                 | ETH             | 18       | <AddChain decimals={18} chainId='0x2105' symbol='ETH' chainName='Base' rpcUrl='https://mainnet.base.org' blockExplorerUrl='https://basescan.org' />
