import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ messageValue, doChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    doChange(value);
  };

  return (
    <form className="form">
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
};


export default Form;
