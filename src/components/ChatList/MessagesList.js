// == Import : npm
import React from 'react';
import Image from 'react-bootstrap/Image';
// import { NavLink } from 'react-router-dom';

// == Import : local
import MessagePreview from './MessagePreview';
// == Import : style
import './scrollinglist.scss';

// == Composant
const MessagesList = ({ users }) => (
  <div className="messages-list">
    {users.map((user) => (
      <MessagePreview key={user.username} />
    ))}
  </div>
);

// == Export
export default MessagesList;
