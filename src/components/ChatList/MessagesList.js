// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

// == Import : local
import MessagePreview from './MessagePreview';
// == Import : style
import './scrollinglist.scss';

// == Composant
const MessagesList = () => (
  <div className="messages-list">
    <MessagePreview />
    <MessagePreview />
    <MessagePreview />
    <MessagePreview />
    <MessagePreview />
    <MessagePreview />
    <MessagePreview />
    <MessagePreview />
  </div>
);

// == Export
export default MessagesList;
