import React from 'react';
import { Account, TokenList } from './components';
import { AccountContextProvider } from './contexts/AccountContext';
import { defaultWeb3Context } from './utils/web3';

function App() {
  return (
      <div className="container">
        <header>
          <h1>Wipeth</h1>
        </header>
        
        <Account />
        
        <AccountContextProvider value={defaultWeb3Context}>
        <div className="content">
          <TokenList />
        </div>
        </AccountContextProvider>
      </div>
  );
}

export default App;
