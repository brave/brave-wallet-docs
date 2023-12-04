import React from "react";

export const AddChain = ({
  children,
  chainId,
  decimals,
  symbol,
  chainName,
  rpcUrl,
  blockExplorerUrl,
}) => (
  <span
    style={{
      backgroundColor: "#737ADE",
      borderRadius: "20px",
      color: "#fff",
      padding: "10px 20px",
      cursor: "pointer",
    }}
    onClick={() => {
      const params = [
        {
          chainId,
          chainName,
          nativeCurrency: {
            name,
            symbol,
            decimals,
          },
          rpcUrls: [rpcUrl],
          iconUrls: [],
          blockExplorerUrls: [blockExplorerUrl],
        },
      ];
      window.ethereum.request({
        method: "wallet_addEthereumChain",
        params,
      });
    }}
  >
    Add
  </span>
);

export default AddChain;
