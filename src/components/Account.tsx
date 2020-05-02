import React from 'react';
import { useAccountContext } from '../contexts/AccountContext';
import { getWeb3Context } from '../utils/web3';
import { Button } from 'antd';

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
      <Button onClick={() => connectWeb3()}>Connect</Button>
    </div>
  );
}