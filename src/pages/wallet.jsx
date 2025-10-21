import React, { useEffect, useMemo, useState } from 'react';

function ensureEthereum() {
  if (typeof window === 'undefined') return undefined;
  return window.ethereum;
}

function toHexChainId(chainIdDecimalOrHex) {
  if (!chainIdDecimalOrHex) return undefined;
  if (String(chainIdDecimalOrHex).startsWith('0x')) return chainIdDecimalOrHex;
  const n = Number(chainIdDecimalOrHex);
  if (Number.isNaN(n)) return undefined;
  return '0x' + n.toString(16);
}

export default function WalletDemoPage() {
  const ethereum = ensureEthereum();

  const [isAvailable, setIsAvailable] = useState(!!ethereum);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [activeAccount, setActiveAccount] = useState('');
  const [chainId, setChainId] = useState('');
  const [balanceWei, setBalanceWei] = useState('0x0');
  const [rpcUrl, setRpcUrl] = useState('');
  const [switchChainId, setSwitchChainId] = useState('0x1');
  const [messageToSign, setMessageToSign] = useState('Hello from Brave Wallet demo');
  const [txTo, setTxTo] = useState('');
  const [txValueEth, setTxValueEth] = useState('0');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setIsAvailable(!!ensureEthereum());
  }, []);

  useEffect(() => {
    if (!ethereum) return;
    const handleAccountsChanged = (accs) => {
      setAccounts(accs || []);
      setActiveAccount(accs && accs.length ? accs[0] : '');
    };
    const handleChainChanged = (cid) => {
      setChainId(cid);
    };
    ethereum.on?.('accountsChanged', handleAccountsChanged);
    ethereum.on?.('chainChanged', handleChainChanged);
    return () => {
      ethereum.removeListener?.('accountsChanged', handleAccountsChanged);
      ethereum.removeListener?.('chainChanged', handleChainChanged);
    };
  }, [ethereum]);

  const balanceEth = useMemo(() => {
    try {
      const wei = BigInt(balanceWei || '0x0');
      const eth = Number(wei) / 1e18;
      return eth.toString();
    } catch {
      return '0';
    }
  }, [balanceWei]);

  async function connect() {
    const eth = ensureEthereum();
    if (!eth) {
      setStatus('Ethereum provider not available. Use Brave on a secure origin.');
      return;
    }
    try {
      const accs = await eth.request({ method: 'eth_requestAccounts' });
      setAccounts(accs);
      setActiveAccount(accs[0] || '');
      setIsConnected(true);
      const cid = await eth.request({ method: 'eth_chainId' });
      setChainId(cid);
      if (accs[0]) {
        const bal = await eth.request({ method: 'eth_getBalance', params: [accs[0], 'latest'] });
        setBalanceWei(bal);
      }
      setStatus('Connected');
    } catch (e) {
      setStatus(`Connect failed: ${e?.message || e}`);
    }
  }

  async function refreshBalance() {
    const eth = ensureEthereum();
    if (!eth || !activeAccount) return;
    try {
      const bal = await eth.request({ method: 'eth_getBalance', params: [activeAccount, 'latest'] });
      setBalanceWei(bal);
    } catch (e) {
      setStatus(`Balance fetch failed: ${e?.message || e}`);
    }
  }

  async function signMessage() {
    const eth = ensureEthereum();
    if (!eth || !activeAccount) return;
    try {
      const sig = await eth.request({ method: 'personal_sign', params: [messageToSign, activeAccount] });
      setStatus(`Signature: ${sig}`);
    } catch (e) {
      setStatus(`Sign failed: ${e?.message || e}`);
    }
  }

  async function sendTransaction() {
    const eth = ensureEthereum();
    if (!eth || !activeAccount) return;
    try {
      const valueHex = '0x' + Math.round(Number(txValueEth || '0') * 1e18).toString(16);
      const txHash = await eth.request({
        method: 'eth_sendTransaction',
        params: [{ from: activeAccount, to: txTo, value: valueHex }],
      });
      setStatus(`Transaction sent: ${txHash}`);
    } catch (e) {
      setStatus(`Send failed: ${e?.message || e}`);
    }
  }

  async function switchChain() {
    const eth = ensureEthereum();
    if (!eth) return;
    try {
      await eth.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: toHexChainId(switchChainId) }] });
      const cid = await eth.request({ method: 'eth_chainId' });
      setChainId(cid);
      setStatus('Chain switched');
    } catch (e) {
      setStatus(`Switch failed: ${e?.message || e}`);
    }
  }

  async function addChain() {
    const eth = ensureEthereum();
    if (!eth) return;
    try {
      await eth.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: toHexChainId(switchChainId),
          chainName: 'Custom EVM',
          nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
          rpcUrls: rpcUrl ? [rpcUrl] : [],
          blockExplorerUrls: [],
        }],
      });
      setStatus('Chain added');
    } catch (e) {
      setStatus(`Add chain failed: ${e?.message || e}`);
    }
  }

  return (
    <div style={{ maxWidth: 840, margin: '40px auto', padding: 16 }}>
      <h1>Brave Wallet Demo</h1>
      {!isAvailable && (
        <p>Ethereum provider not available. Ensure Brave Wallet is enabled and this page is served over HTTPS.</p>
      )}

      <section style={{ marginBottom: 24 }}>
        <button onClick={connect} style={btnStyle}>Connect</button>
        <div style={{ marginTop: 8, fontFamily: 'monospace' }}>
          <div>Connected: {String(isConnected)}</div>
          <div>ChainId: {chainId}</div>
          <div>Account: {activeAccount || '(none)'}</div>
          <div>Balance: {balanceEth} ETH</div>
          <button onClick={refreshBalance} style={btnStyleSmall}>Refresh balance</button>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h3>Sign message</h3>
        <input value={messageToSign} onChange={(e) => setMessageToSign(e.target.value)} style={inputStyle} />
        <button onClick={signMessage} style={btnStyle}>Sign</button>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h3>Send transaction</h3>
        <input placeholder="Recipient (0x...)" value={txTo} onChange={(e) => setTxTo(e.target.value)} style={inputStyle} />
        <input placeholder="Value (ETH)" value={txValueEth} onChange={(e) => setTxValueEth(e.target.value)} style={inputStyle} />
        <button onClick={sendTransaction} style={btnStyle}>Send</button>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h3>Switch/Add chain</h3>
        <input placeholder="ChainId (e.g. 0x1 or 1)" value={switchChainId} onChange={(e) => setSwitchChainId(e.target.value)} style={inputStyle} />
        <input placeholder="RPC URL (for add)" value={rpcUrl} onChange={(e) => setRpcUrl(e.target.value)} style={inputStyle} />
        <button onClick={switchChain} style={btnStyle}>Switch</button>
        <button onClick={addChain} style={btnStyle}>Add</button>
      </section>

      {status && (
        <pre style={{ whiteSpace: 'pre-wrap', background: '#111', color: '#eee', padding: 12, borderRadius: 8 }}>{status}</pre>
      )}
    </div>
  );
}

const btnStyle = {
  backgroundColor: '#737ADE',
  borderRadius: 8,
  color: '#fff',
  padding: '8px 14px',
  cursor: 'pointer',
  border: 'none',
  marginRight: 8,
};

const btnStyleSmall = { ...btnStyle, padding: '4px 8px', fontSize: 12 };

const inputStyle = {
  display: 'block',
  margin: '6px 0',
  padding: '8px 12px',
  width: '100%',
  maxWidth: 520,
  borderRadius: 6,
  border: '1px solid #ccc',
};
