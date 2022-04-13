import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';
import Form from './components/Form';
import SignIn from './components/SignIn';
var version = require('../package.json').version;

const SUGGESTED_DONATION = '0';
const BOATLOAD_OF_GAS = Big(3).times(10 ** 13).toFixed();

const App = ({ contract, currentUser, nearConfig, wallet }) => {
  const [answer, setAnswer] = useState("No transaction executed.");

  const onSubmit = (e) => {
    e.preventDefault();

    const { fieldset, name_prompt, donation } = e.target.elements;

    fieldset.disabled = true;
    
    contract.hello(
      { name: name_prompt.value },
      BOATLOAD_OF_GAS,
      Big(donation.value || '0').times(10 ** 24).toFixed()
    ).then((answer) => {
      fieldset.disabled = false;
      donation.value = SUGGESTED_DONATION;
      name_prompt.value = '';
      name_prompt.focus();
      setAnswer(answer);
    });
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

  return (
    <main>
      <header>
        <h1>NEAR Challenge #2 - Hello World - {version}</h1>
        { currentUser
          ? <button onClick={signOut}>Log out</button>
          : <button onClick={signIn}>Log in</button>
        }
      </header>      
      <h3>Status: { answer }</h3>
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