import React from 'react';
import { Account, TokenList } from './components';

function App() {
  return (
      <div className="container">
        <header>
          <h1>Wipeth</h1>
        </header>
        <div>
          <Account />
        </div>
        <div>
          <TokenList />
        </div>
      </div>
  );
}

export default App;
