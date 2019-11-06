import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Col, Row } from 'react-bootstrap';


import './messages.scss';

import MessageDetailContainer from 'src/containers/ChatRoom/Messages';

import Message from './Message';

class Messages extends React.Component {

  componentDidMount() {
    const { fetchMessages } = this.props;
    console.log('les messages vont arrives');
    fetchMessages();
    this.chatZone.scrollBy(0, this.chatZone.scrollHeight);
  }

  // componentDidMount() {
  //   this.chatZone.scrollBy(0, this.chatZone.scrollHeight);
  // }

  componentDidUpdate() {
    this.chatZone.scrollBy(0, this.chatZone.scrollHeight);
  }

  render() {
    const { messages } = this.props;
    console.log(messages);
    return (
      <div
        ref={(elementDuDOM) => {
          this.chatZone = elementDuDOM;
        }}
        className="messages"
      >
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
    );
  }
}


// Messages.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

export default Messages;
