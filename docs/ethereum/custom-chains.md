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

Other chains can be added to Brave through a site like
[chainlist.org](https://chainlist.org)


| Chain ID    | Name                 | Native currency | Decimals | Add    |
| ----------- | -------------------- | --------------- | -------- | ------ |
| 0xa4b1      | Arbitrum One         | AETH            | 18       | <Add decimals={18} chainId='0xa4b1' symbol='AETH' chainName='Arbitrum One' rpcUrl='https://arb1.arbitrum.io/rpc' blockExplorerUrl='https://arbiscan.io' />
