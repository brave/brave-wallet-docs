---
sidebar_position: 3
---

# Custom chains

export const Add = ({children, chainId, decimals, symbol, chainName, rpcUrl, blockExplorerUrl}) => (
  <span
    style={{
      backgroundColor: '#737ADE',
      borderRadius: '20px',
      color: '#fff',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onClick={() => {
      const params = [{
        chainId,
        chainName,
        nativeCurrency: {
          name,
          symbol,
          decimals
        },
        rpcUrls: [rpcUrl],
        iconUrls: [],
        blockExplorerUrls: [ blockExplorerUrl ]
      }]
      window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params
      })
    }}>
    Add
  </span>
);

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
| 0xa4b1      | Arbitrum One         | AETH            | 18       | <Add decimals={18} chainId='0xa4b1' symbol='AETH' chainName='Arbitrum One' rpcUrl='https://arb1.arbitrum.io/rpc' blockExplorerUrl='https://arbiscan.io' />
| 0x2105      | Base                 | ETH             | 18       | <Add decimals={18} chainId='0x2105' symbol='ETH' chainName='Base' rpcUrl='https://mainnet.base.org' blockExplorerUrl='https://basescan.org' />
