import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';


const Message = ({ author, content, isMe }) =>
  // const CssToDisplay = !isMe ? 'message--not-mine' : 'message';
  
  (
    <>
      <div className="message">
        <div className="message-author">{author}</div>
        <p className="message-content">{content}</p>
      </div>
      {/* <div className="message--not-mine">
        <div className="message-author">{author}</div>
        <p className="message-content">{text}</p>
      </div> */}
    </>
  );

Message.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string.isRequired,
  isMe: PropTypes.bool.isRequired,
};

Message.defaultProps = {
  author: 'Anonyme',
};

export default Message;
