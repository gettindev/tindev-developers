import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

import { isReceiver, isSender, isMe } from 'src/store/selectors';



const Message = ( message, isReceiver, isSender, currentUser ) => {
  const { id, content, receiver, sender, matchId } = message; 

  // const currentId = loc
  // isReceiver = message.filter((user) => user === user.receiver);
  // get all messages where user is receiver
  // message.filter((user) => user == user.receiver)
  // const CssToDisplay = !isMe ? 'message--not-mine' : 'message';
  // console.log('message', message);
  const currentUserId = localStorage.getItem('id');
  console.log(currentUserId);
  return (
    <>
      <div
        className={
          classNames(
            'message',
            { 'message--not-mine': receiver == currentUserId },
          )
        }
      >
        <div className="message-author">{receiver}</div>
          <p className="message-content">{content}</p>
        </div>
      {/* {isMe && (
        <div className="message--not-mine">
          <div className="message-author">{sender}</div>
          <p className="message-content">{content}</p>
        </div>
      )} */}
    </>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string.isRequired,
  isMe: PropTypes.bool.isRequired,
};

Message.defaultProps = {
  author: 'Anonyme',
};

export default Message;
