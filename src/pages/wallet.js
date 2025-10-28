import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';

function isBrowser() {
  return typeof window !== 'undefined';
}

function getEthereumProvider() {
  if (!isBrowser()) return undefined;
  return window.ethereum;
}

function getSolanaProvider() {
  if (!isBrowser()) return undefined;
  // Prefer Brave's alias; keep Phantom alias for compatibility
  return window.braveSolana || window.solana;
}

function parseHexWeiToEthString(hexWei) {
  try {
    const wei = BigInt(hexWei);
    const decimals = 18n;
    const base = 10n ** decimals;
    const whole = wei / base;
    const fraction = wei % base;
    // Trim trailing zeros in fractional part
    const fractionStr = fraction.toString().padStart(Number(decimals), '0').replace(/0+$/, '');
    return fractionStr.length > 0 ? `${whole.toString()}.${fractionStr}` : whole.toString();
  } catch (e) {
    return '0';
  }
}

function parseEthToHexWei(ethString) {
  const [wholePart, fractionPart = ''] = String(ethString).split('.');
  const decimals = 18;
  const normalizedFraction = (fractionPart + '0'.repeat(decimals)).slice(0, decimals);
  const wei = BigInt(wholePart || '0') * (10n ** 18n) + BigInt(normalizedFraction || '0');
  return '0x' + wei.toString(16);
}

export default function WalletPage() {
  // Ethereum state
  const [isEthAvailable, setIsEthAvailable] = useState(false);
  const [ethAccounts, setEthAccounts] = useState([]);
  const [ethPrimaryAccount, setEthPrimaryAccount] = useState('');
  const [ethChainId, setEthChainId] = useState('');
  const [ethBalance, setEthBalance] = useState('');
  const [ethTxTo, setEthTxTo] = useState('');
  const [ethTxAmount, setEthTxAmount] = useState('');
  const [ethTxHash, setEthTxHash] = useState('');
  const [ethSignMsg, setEthSignMsg] = useState('Hello from Brave Wallet demo');
  const [ethSignature, setEthSignature] = useState('');
  const [ethError, setEthError] = useState('');

  // Solana state
  const [isSolAvailable, setIsSolAvailable] = useState(false);
  const [solPublicKey, setSolPublicKey] = useState(null);
  const [solSignature, setSolSignature] = useState('');
  const [solSignMsg, setSolSignMsg] = useState('Hello from Brave Wallet demo (Solana)');
  const [solError, setSolError] = useState('');

  const ethereum = useMemo(getEthereumProvider, []);
  const solana = useMemo(getSolanaProvider, []);

  // Detect providers on mount
  useEffect(() => {
    setIsEthAvailable(Boolean(ethereum));
    setIsSolAvailable(Boolean(solana));
  }, [ethereum, solana]);

  const refreshEthState = useCallback(async () => {
    setEthError('');
    if (!ethereum) return;
    try {
      const [accounts, chainId] = await Promise.all([
        ethereum.request({ method: 'eth_accounts' }),
        ethereum.request({ method: 'eth_chainId' }),
      ]);
      setEthAccounts(accounts || []);
      const primary = accounts && accounts[0] ? accounts[0] : '';
      setEthPrimaryAccount(primary);
      setEthChainId(chainId || '');
      if (primary) {
        const balanceHex = await ethereum.request({
          method: 'eth_getBalance',
          params: [primary, 'latest'],
        });
        setEthBalance(parseHexWeiToEthString(balanceHex));
      } else {
        setEthBalance('');
      }
    } catch (err) {
      setEthError(String(err?.message || err));
    }
  }, [ethereum]);

  // Listen for account/chain changes
  useEffect(() => {
    if (!ethereum) return;
    const onAccountsChanged = (accs) => {
      setEthAccounts(accs || []);
      const primary = accs && accs[0] ? accs[0] : '';
      setEthPrimaryAccount(primary);
      if (primary) {
        ethereum
          .request({ method: 'eth_getBalance', params: [primary, 'latest'] })
          .then((balanceHex) => setEthBalance(parseHexWeiToEthString(balanceHex)))
          .catch(() => setEthBalance(''));
      } else {
        setEthBalance('');
      }
    };
    const onChainChanged = (cid) => {
      setEthChainId(cid);
      refreshEthState();
    };
    ethereum.on?.('accountsChanged', onAccountsChanged);
    ethereum.on?.('chainChanged', onChainChanged);
    return () => {
      ethereum.removeListener?.('accountsChanged', onAccountsChanged);
      ethereum.removeListener?.('chainChanged', onChainChanged);
    };
  }, [ethereum, refreshEthState]);

  // Initialize state on mount
  useEffect(() => {
    refreshEthState();
  }, [refreshEthState]);

  const connectEthereum = useCallback(async () => {
    setEthError('');
    if (!ethereum) return;
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setEthAccounts(accounts || []);
      const primary = accounts && accounts[0] ? accounts[0] : '';
      setEthPrimaryAccount(primary);
      if (primary) {
        const balanceHex = await ethereum.request({
          method: 'eth_getBalance',
          params: [primary, 'latest'],
        });
        setEthBalance(parseHexWeiToEthString(balanceHex));
      }
    } catch (err) {
      setEthError(String(err?.message || err));
    }
  }, [ethereum]);

  const sendEth = useCallback(async () => {
    setEthError('');
    setEthTxHash('');
    if (!ethereum || !ethPrimaryAccount) return;
    try {
      const txParams = {
        from: ethPrimaryAccount,
        to: ethTxTo,
        value: parseEthToHexWei(ethTxAmount),
      };
      const txHash = await ethereum.request({ method: 'eth_sendTransaction', params: [txParams] });
      setEthTxHash(txHash);
    } catch (err) {
      setEthError(String(err?.message || err));
    }
  }, [ethereum, ethPrimaryAccount, ethTxTo, ethTxAmount]);

  const signEthMessage = useCallback(async () => {
    setEthError('');
    setEthSignature('');
    if (!ethereum || !ethPrimaryAccount) return;
    try {
      // personal_sign: params are [message, address]
      const signature = await ethereum.request({
        method: 'personal_sign',
        params: [ethSignMsg, ethPrimaryAccount],
      });
      setEthSignature(signature);
    } catch (err) {
      setEthError(String(err?.message || err));
    }
  }, [ethereum, ethPrimaryAccount, ethSignMsg]);

  const addPolygonChain = useCallback(async () => {
    setEthError('');
    if (!ethereum) return;
    try {
      const params = [{
        chainId: '0x89',
        chainName: 'Polygon Mainnet',
        nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
        rpcUrls: ['https://polygon-rpc.com'],
        iconUrls: [],
        blockExplorerUrls: ['https://polygonscan.com/'],
      }];
      await ethereum.request({ method: 'wallet_addEthereumChain', params });
    } catch (err) {
      setEthError(String(err?.message || err));
    }
  }, [ethereum]);

  const connectSolana = useCallback(async () => {
    setSolError('');
    setSolSignature('');
    if (!solana) return;
    try {
      const resp = await solana.connect();
      setSolPublicKey(resp?.publicKey || solana.publicKey || null);
    } catch (err) {
      setSolError(String(err?.message || err));
    }
  }, [solana]);

  const disconnectSolana = useCallback(async () => {
    setSolError('');
    setSolSignature('');
    if (!solana) return;
    try {
      await solana.disconnect();
      setSolPublicKey(null);
    } catch (err) {
      setSolError(String(err?.message || err));
    }
  }, [solana]);

  const signSolanaMessage = useCallback(async () => {
    setSolError('');
    setSolSignature('');
    if (!solana) return;
    try {
      const messageBytes = new TextEncoder().encode(solSignMsg);
      const { signature } = await solana.signMessage(messageBytes, 'utf8');
      // Convert Uint8Array to base64 for display
      const b64 = isBrowser() ? btoa(String.fromCharCode(...signature)) : '';
      setSolSignature(b64);
    } catch (err) {
      setSolError(String(err?.message || err));
    }
  }, [solana, solSignMsg]);

  return (
    <Layout title="Wallet Demo" description="Demo wallet using Brave providers">
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Wallet Demo</h1>
        <p style={{ marginTop: 0 }}>Interact with Ethereum and Solana using the injected providers.</p>

        {/* Ethereum Section */}
        <section style={{ marginTop: '2rem' }}>
          <h2>Ethereum</h2>
          {!isEthAvailable && (
            <p>Provider not available. Ensure Brave Wallet is enabled and this page is served over HTTPS.</p>
          )}
          {isEthAvailable && (
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <button onClick={connectEthereum}>Connect</button>
                <button onClick={refreshEthState}>Refresh</button>
                <button onClick={addPolygonChain}>Add Polygon</button>
              </div>
              <div style={{ marginTop: 12 }}>
                <div><strong>Accounts</strong>: {ethAccounts.length > 0 ? ethAccounts.join(', ') : '—'}</div>
                <div><strong>Primary</strong>: {ethPrimaryAccount || '—'}</div>
                <div><strong>ChainId</strong>: {ethChainId || '—'}</div>
                <div><strong>Balance (ETH)</strong>: {ethBalance || '—'}</div>
              </div>

              <div style={{ marginTop: 16 }}>
                <h3 style={{ marginTop: 0 }}>Send ETH</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    placeholder="Recipient 0x..."
                    value={ethTxTo}
                    onChange={(e) => setEthTxTo(e.target.value)}
                    style={{ flex: '1 1 280px' }}
                  />
                  <input
                    placeholder="Amount (ETH)"
                    value={ethTxAmount}
                    onChange={(e) => setEthTxAmount(e.target.value)}
                    style={{ width: 160 }}
                  />
                  <button onClick={sendEth} disabled={!ethPrimaryAccount || !ethTxTo || !ethTxAmount}>Send</button>
                </div>
                {ethTxHash && (
                  <div style={{ marginTop: 8 }}>
                    <strong>Tx Hash</strong>: {ethTxHash}
                  </div>
                )}
              </div>

              <div style={{ marginTop: 16 }}>
                <h3 style={{ marginTop: 0 }}>Sign Message</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    value={ethSignMsg}
                    onChange={(e) => setEthSignMsg(e.target.value)}
                    style={{ flex: '1 1 360px' }}
                  />
                  <button onClick={signEthMessage} disabled={!ethPrimaryAccount}>Sign</button>
                </div>
                {ethSignature && (
                  <div style={{ marginTop: 8, wordBreak: 'break-all' }}>
                    <strong>Signature</strong>: {ethSignature}
                  </div>
                )}
              </div>

              {ethError && (
                <div style={{ marginTop: 12, color: '#b91c1c' }}>Error: {ethError}</div>
              )}
            </div>
          )}
        </section>

        {/* Solana Section */}
        <section style={{ marginTop: '2rem' }}>
          <h2>Solana</h2>
          {!isSolAvailable && (
            <p>Provider not available. Ensure Brave Wallet exposes window.braveSolana/window.solana.</p>
          )}
          {isSolAvailable && (
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <button onClick={connectSolana} disabled={Boolean(solPublicKey)}>Connect</button>
                <button onClick={disconnectSolana} disabled={!solPublicKey}>Disconnect</button>
              </div>
              <div style={{ marginTop: 12 }}>
                <div><strong>Public Key</strong>: {solPublicKey ? String(solPublicKey) : '—'}</div>
              </div>
              <div style={{ marginTop: 16 }}>
                <h3 style={{ marginTop: 0 }}>Sign Message</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <input
                    value={solSignMsg}
                    onChange={(e) => setSolSignMsg(e.target.value)}
                    style={{ flex: '1 1 360px' }}
                  />
                  <button onClick={signSolanaMessage} disabled={!solPublicKey}>Sign</button>
                </div>
                {solSignature && (
                  <div style={{ marginTop: 8, wordBreak: 'break-all' }}>
                    <strong>Signature (base64)</strong>: {solSignature}
                  </div>
                )}
              </div>
              {solError && (
                <div style={{ marginTop: 12, color: '#b91c1c' }}>Error: {solError}</div>
              )}
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
