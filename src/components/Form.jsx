import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({ onSubmit, currentUser }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p>Say hello, { currentUser.accountId }!</p>
        <p className="highlight">
          <label htmlFor="name">Your name:</label>
          <input
            autoComplete="off"
            autoFocus
            id="name_prompt"
            required
          />
        </p>
        <button type="submit" value="hello" className="margin_button"
                title="Executes the method hello which returns a message from NEAR. This does not require a confirmation.">
          Hello
        </button>
        <button type="submit" value="remember" className="margin_button"
                title="Executes the method remember_me which stores the given name in the smart contract. This does require a confirmation.">
          Remember me
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
