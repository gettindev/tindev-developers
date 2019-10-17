// == Import : npm
import React from 'react';

// == Import : local
// import MenuNav from './Menu';
import ScrollingList from './ScrollingList';
import MessagesList from './MessagesList';


// == Import : style
// import './chatlist.scss';

// == Composant
const ChatList = () => (
  <div className="messages">
    {/* <MenuNav /> */}
    <ScrollingList />
    {/* <MessagesList /> */}
  </div>
);

// == Export
export default ChatList;
