// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

// == Import : local

// == Import : style
import './messagepreview.scss';

// == Composant
const MessagePreview = () => (
  <div className="message-wrapper d-flex active">
    <div className="avatar-mini my-auto">
      <Image
        className="user-card"
        src="http://placeimg.com/500/500/people"
        roundedCircle
      />
    </div>
    <div className="message-preview-container my-auto ml-2">
      <p>Lorem ipsum dolor sit lorem Lorem ipsum dolor sit lorem</p>
    </div>
  </div>
);

// == Export
export default MessagePreview;
