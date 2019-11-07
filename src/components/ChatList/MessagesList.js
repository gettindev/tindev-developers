// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import MessagePreview from './MessagePreview';
// == Import : style
import './matchlist.scss';

// == Composant
const MessagesList = ({ lastMessages }) => {
  console.log(lastMessages);
  return (
    <div className="messages-list">
      {/* {lastMessages.map((user) => (
      <NavLink to ="/chat/1">
        <MessagePreview key={user.username} />
      </NavLink>
      ))} */}
    </div>
  );
};

// == Export
export default MessagesList;
