import React from 'react';
import PropTypes from 'prop-types';


const Message = ({ author, text }) => (
  <div className="message">
    <div className="message-author">{author}</div>
    <p className="message-content">{text}</p>
  </div>
);


Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Message.defaultProps = {
  author: 'Anonyme',
};

export default Message;
