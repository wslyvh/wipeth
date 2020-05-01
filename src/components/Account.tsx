import React, { useState } from 'react';
import Web3 from 'web3';

const INFURA_KEY = "f334893611fd4a3db5d80f6cac427107"

export const Account = () => {
  const [address, setAddress] = useState("");

  const connectWeb3 = async () => {
    console.log("Connect web3");
    const web3 = new Web3(Web3.givenProvider || "https://mainnet.infura.io/v3/" + INFURA_KEY)
    
    console.log("get accounts");
    const accounts = await web3.eth.getAccounts();
    
    if(accounts) {
      console.log(accounts);
      const defaultAccount = accounts[0];
      setAddress(defaultAccount);
    }
  }

  if (address) { 
    return (
      <div>
        <b>Address:</b> { address }
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => connectWeb3()}>
        Connect
      </button>
    </div>
  );
}
