import Web3 from 'web3';
import { INFURA_URI } from '../constants';
import { IAccountContext } from '../contexts/AccountContext';

export const defaultWeb3Context: IAccountContext = {
  authenticated: false,
};

export async function getWeb3Context() { 
    const web3 = new Web3(Web3.givenProvider || INFURA_URI)
    
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts ? accounts[0] : "";
    
    if(!defaultAccount) { 
      console.log("no account set. check provider");
    }

    const web3AccountContext: IAccountContext = {
      authenticated: true,
      address: defaultAccount,
      provider: web3.currentProvider
    };

    return web3AccountContext;
}