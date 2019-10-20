import React from 'react';
import PropTypes from 'prop-types';

import './messages.scss';

import Message from './Message';

const Messages = ({ messages }) => (
  <div className="messages">
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
