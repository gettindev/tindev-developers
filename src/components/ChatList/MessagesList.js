// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import MessagePreview from './MessagePreview';
// == Import : style
import './matchlist.scss';

// == Composant
const MessagesList = ({ conversations }) => {
  // conversations = array of matchwithlastmessage
  console.log('MessageList composant:', conversations);

  const arrayOfMessagesFromMatch = conversations.matchs.map((messagepreview) => messagepreview);

  console.log('arrayOfMessagesFromMatch', arrayOfMessagesFromMatch);
  console.log(arrayOfMessagesFromMatch.map((oneItem) => oneItem));

  return (
    <div className="messages-list">
      {arrayOfMessagesFromMatch.map((oneMatchMessage) => (
        <NavLink to={`/chat/${oneMatchMessage.messages[0].receiver}`}>
          <MessagePreview
            {...conversations}
            key={oneMatchMessage.messages[0].id}
          />
        </NavLink>
      ))}
    </div>
  );
};

// == Export
export default MessagesList;
