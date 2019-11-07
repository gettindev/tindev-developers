// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

// == Import : local

// == Import : style
import './messagepreview.scss';

// == Composant
const MessagePreview = (conversations) => {
  // console.log('content', oneMatchMessage);
  // console.log('CONVERSATIONS', conversations.matchs);
  const singleMatchMessage = conversations.matchs.map((conversations)=> conversations);
  // console.log(singleMatchMessage.messages[0]);


  // const { content } = oneMatchMessage.messages;

  return (
    <div className="message-wrapper d-flex active">toto
      {/* <div className="avatar-mini my-auto">
        <Image
          className="user-card"
          src="http://placeimg.com/500/500/people"
          roundedCircle
        />
      </div>
      <div className="message-preview-container my-auto ml-2">
        <p>{content}</p>
      </div> */}
    </div>
  );
};

// == Export
export default MessagePreview;
