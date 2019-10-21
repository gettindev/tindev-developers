import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

import './messages.scss';

import Message from './Message';

const Messages = ({ messages }) => (
  <Col className="messages no-gutters">
    {messages.map((message) => (
      <Message key={message.id} {...message} />
    ))}
  </Col>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
