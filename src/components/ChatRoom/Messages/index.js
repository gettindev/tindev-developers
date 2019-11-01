import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';


import './messages.scss';

import MessageDetailContainer from 'src/containers/ChatRoom/Messages/Message';

import Message from './Message';

class Messages extends React.Component {
  componentDidUpdate() {
    this.chatZone.scrollBy(0, this.chatZone.scrollHeight);
  }

  componentDiMount() {
    this.chatZone.scrollBy(0, this.chatZone.scrollHeight);
  }

  render() {
    const { messages } = this.props;
    return (
      <Row
        ref={(elementDuDOM) => {
          this.chatZone = elementDuDOM;
        }}
        className="messages no-gutters"
      >
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </Row>
    );
  }
}


Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Messages;
