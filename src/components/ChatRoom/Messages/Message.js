import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

const Message = ({ author, text, isMe }) =>
  // const CssToDisplay = !isMe ? 'message--not-mine' : 'message';

  (
    <>
      {/* {!isMe && (
        <Col
          className="message"
          xs={11}
          sm={8}
        >
          <Row>
            <div className="message-author ml-3 mb-1">{author}</div>
          </Row>
          <Row className="no-gutters">
            <div className="message-content ml-2">{text}</div>
          </Row>
        </Col>
      )} */}
      {!isMe && (
        <Col
          className="message--not-mine text-right"
          xs={{ span: 10, offset: 2 }}
          sm={{ span: 8, offset: 4 }}
        >
          <Row>
            <div className="message-author ml-3 mb-1">{author}</div>
          </Row>
          <Row className="no-gutters">
            <div className="message-content ml-2">{text}</div>
          </Row>
        </Col>
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
