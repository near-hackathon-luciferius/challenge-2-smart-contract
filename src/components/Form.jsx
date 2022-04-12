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
            id="name"
            required
          />
        </p>
        <button type="submit">
          Hello!
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
