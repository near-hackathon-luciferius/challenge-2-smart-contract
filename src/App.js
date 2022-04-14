import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';
import Form from './components/Form';
import SignIn from './components/SignIn';
var version = require('../package.json').version;

const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();

const App = ({ contract, currentUser, nearConfig, wallet, lastTransaction, provider, errorMessage }) => {
  const [answer, setAnswer] = useState(errorMessage ? decodeURI(errorMessage) : currentUser ? "Thinking please wait..." : "Please login first.");

  const onSubmit = (e) => {
    e.preventDefault();

    const { fieldset, name_prompt } = e.target.elements;

    fieldset.disabled = true;
    //Big(donation.value || '0').times(10 ** 24).toFixed()
    if (e.nativeEvent.submitter.value === 'hello') {        
        contract.hello(
          { name: name_prompt.value },
          BOATLOAD_OF_GAS,
          0
        ).then((answer) => {
          fieldset.disabled = false;
          name_prompt.value = '';
          name_prompt.focus();
          setAnswer(answer);
        });
    }
    else {
        contract.remember_me(
          { name: name_prompt.value },
          BOATLOAD_OF_GAS,
          Big('0.00045').times(10 ** 24).toFixed()
        ).then((answer) => {
          fieldset.disabled = false;
          name_prompt.value = '';
          name_prompt.focus();
          setAnswer(answer);
        });
    }
  };
  
  const signIn = () => {
    wallet.requestSignIn(
      {contractId: nearConfig.contractName, methodNames: [contract.hello.name]}, //contract requesting access
      'NEAR Challenge #2 - Hello World', //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };
  
  useEffect(() => {
      if (currentUser && lastTransaction && !errorMessage) {
          getState(lastTransaction, currentUser.accountId);
      }
      else if (currentUser && !errorMessage){
          getLastRememberedMessage(currentUser.accountId);
      }
      window.history.pushState({}, "", window.location.origin + window.location.pathname);

      async function getState(txHash, accountId) {
        const result = await provider.txStatus(txHash, accountId);
        setAnswer(result.receipts_outcome[0].outcome.logs.pop());
      }
      
      async function getLastRememberedMessage(accountId) {
        const result = await contract.get_last_message({ account_id: accountId });
        setAnswer(result);
      }
  }, [currentUser, errorMessage, lastTransaction, contract, provider]);
  


  return (
    <main>
      <header>
        <h1>NEAR Challenge #2 - Hello World - {version}</h1>
        { currentUser
          ? <button onClick={signOut} className="login_button">Log out</button>
          : <button onClick={signIn} className="login_button">Log in</button>
        }
      </header>      
      <h5>Status: { answer }</h5>
      { currentUser
        ? <Form onSubmit={onSubmit} currentUser={currentUser} />
        : <SignIn/>
      }
    </main>
  );
}

App.propTypes = {
  contract: PropTypes.shape({
    hello: PropTypes.func.isRequired
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App;
