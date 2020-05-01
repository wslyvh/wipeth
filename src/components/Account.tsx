import React, { useContext, useState } from 'react';
import { useAccountContext, AccountContext } from '../contexts/AccountContext';
import { getWeb3Context } from '../utils/web3';

export const Account = () => {
  const accountContext = useAccountContext();

  if (accountContext?.address) { 
    return (
      <div>
        <b>Address:</b> { accountContext?.address }
      </div>
    )
  }

  const connectWeb3 = async () => {
    console.log("Connect web3");
    const ctxt = await getWeb3Context();
    console.log("setAccountContext", ctxt);
    // setAccountContext(ctxt);
  }

  return (
    <div>
      <button onClick={() => connectWeb3()}>
        Connect
      </button>
    </div>
  );
}