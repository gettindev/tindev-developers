// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import MessagePreview from './MessagePreview';
// == Import : style
import './matchlist.scss';

// == Composant
const MessagesList = ({ conversations, mymatches }) => {
  // conversations = array of matchwithlastmessage
  console.log('MessageList composant:', conversations);
  console.log('mymatches Composant', mymatches);

  // const arrayOfMessagesFromMatch = conversations.matchs.map((messagepreview, index) => messagepreview.messages[0].content);
  // console.log('arrayOfMessagesFromMatch =', arrayOfMessagesFromMatch);

  // const singleMatchMessage = arrayOfMessagesFromMatch.map((oneItem) => oneItem);
  // console.log('singleMatchMessage =', singleMatchMessage);

  return (
    <div className="messages-list">
      {conversations.matchs.map((oneMatchMessage) => (
        <NavLink to={`/chat/${oneMatchMessage.messages[0].receiver}`}>
          <MessagePreview
            {...mymatches} 
            key={oneMatchMessage.messages[0].receiver}
            singleMatchMessage={oneMatchMessage.messages[0].content}
            
          />
        </NavLink>
      ))}
    </div>
  );
};

// == Export
export default MessagesList;
