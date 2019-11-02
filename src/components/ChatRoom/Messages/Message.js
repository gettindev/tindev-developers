import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';


const Message = ({ author, text, isMe }) =>
// const CssToDisplay = !isMe ? 'message--not-mine' : 'message';
  (
    <>
      {isMe && (
        <div className="message">
          <div className="message-author">{author}</div>
          <p className="message-content">{text}</p>
        </div>
      )}
      {!isMe && (
        <div className="message--not-mine">
          <div className="message-author">{author}</div>
          <p className="message-content">{text}</p>
        </div>
      )}
    </>
  );


// const Message = ({ author, text, isMe }) => {

//   const CssToDisplay = !isMe ? 'message--not-mine' : 'message';

//   return (
//     <>
//       <Col
//         className={CssToDisplay}
//         // className={
//         //   classNames(
//         //     'message',
//         //     { 'message--not-mine': !isMe },
//         //   )
//         // }
//         // className="message"
//         xs={11}
//         sm={8}
//       >
//         <Col className="message-author">{author}</Col>
//         <p className="message-content">{text}</p>
//       </Col>
//       {/* <Col className="message--not-mine" xs={{ span: 11, offset: 1 }} sm={{ span: 8, offset: 4 }}>
//         <Col className="message-author">{author}</Col>
//         <p className="message-content">{text}</p>
//       </Col> */}

//     </>
//   );
// };


Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string.isRequired,
  isMe: PropTypes.bool.isRequired,
};

Message.defaultProps = {
  author: 'Anonyme',
};

export default Message;
