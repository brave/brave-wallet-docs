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
| 0x89        | Polygon Mainnet      | MATIC           | 18       | <Add decimals={18} chainId='0x89' symbol='MATIC' chainName='Polygon' rpcUrl='https://polygon-rpc.com/' blockExplorerUrl='https://polygonscan.com/' /> |
| 0xA86A      | Avalanche Mainnet    | AVAX            | 18       | <Add decimals={18} chainId='0xA86A' symbol='AVAX' chainName='Avalanche' rpcUrl='https://api.avax.network/ext/bc/C/rpc' blockExplorerUrl='https://snowtrace.io/' /> |
| 0x38        | Binance Smart Chain  | BNB             | 18       | <Add decimals={18} chainId='0x38' symbol='BNB' chainName='Binance Smart Chain' rpcUrl='https://bsc-dataseed1.binance.org' blockExplorerUrl='https://bscscan.com' /> |
