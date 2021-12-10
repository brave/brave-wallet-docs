import React from 'react'

const Connect = ({children}) => (
  <p><span
    style={{
      backgroundColor: '#25c2a0',
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
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
