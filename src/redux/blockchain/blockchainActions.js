// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";
import abi from '../../config/abi.json'
import config from '../../config/config.json'
import React, { useContext, useEffect } from 'react';


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
	
  return async (dispatch) => {
    dispatch(connectRequest());
    const CONFIG = config//await configResponse.json();
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      await ethereum.enable();
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Account ::  ", accounts);
        const networkId = await ethereum.request({
          method: "net_version",
        });
        console.log('Network Id ::  ', networkId);
        if (networkId == CONFIG.NETWORK.ID) {abi
          console.log('ABI fire :  ', abi);
          const SmartContractObj = //new web3.eth.Contract(abi, CONFIG.CONTRACT_ADDRESS)
            new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // useEffect(() => {
					// 	setState((state) => ({ ...state, accounts}));
					// }, []);
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } 
        else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {

        console.log(err);
        dispatch(connectFailed("Something went wrong.", err));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
