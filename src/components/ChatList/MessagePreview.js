// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

// == Import : local

// == Import : style
import './messagepreview.scss';

// == Composant
const MessagePreview = () => (
  <div className="message-wrapper d-flex">
    <Image
      className="user-card"
      src='http://placeimg.com/500/500/people'
      roundedCircle
    />
    <div className="message-preview-container">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit... </p>

    </div>
  </div>
);

// == Export
export default MessagePreview;
