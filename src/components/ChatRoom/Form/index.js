import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ messageValue }) => (
  <form className="form">
    <input
      className="form-input"
      value={messageValue}
      placeholder="Saisissez votre message..."
    />
    <button className="form-submit" type="submit">
      <FaPaperPlane />
    </button>
  </form>
);

Form.propTypes = {
  messageValue: PropTypes.string.isRequired,
  // doChange: PropTypes.func.isRequired,
};


export default Form;
