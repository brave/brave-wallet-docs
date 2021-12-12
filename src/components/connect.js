import React from 'react'

const Connect = ({children}) => (
  <p><span
    style={{
      backgroundColor: '#737ADE',
      borderRadius: '20px',
      color: '#fff',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
    onClick={() => {
      window.ethereum.request({
        method: 'eth_requestAccounts'
      })
    }}>
    Connect!
  </span></p>
);

export default Connect
