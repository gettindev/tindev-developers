import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

import './form.scss';

const Form = () => (
  <form className="form">
    <input className="form-input" placeholder="Saisissez votre message..." />
    <button className="form-submit" type="submit">
      <FaPaperPlane />
    </button>
  </form>
);

export default Form;
