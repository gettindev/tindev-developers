import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ messageValue, doChange, addMessage }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    doChange(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentId = localStorage.getItem('id');
    addMessage(messageValue, currentId);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="form-input"
        value={messageValue}
        placeholder="Saisissez votre message..."
        onChange={handleChange}
      />
      <button className="form-submit" type="submit">
        <FaPaperPlane />
      </button>
    </form>
  );
};

Form.propTypes = {
  messageValue: PropTypes.string.isRequired,
  doChange: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};


export default Form;
