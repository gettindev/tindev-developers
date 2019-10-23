// == Import : npm
import React from 'react';

// == Import : local
// import MenuNav from './Menu';
import Nav from 'src/components/Nav';
import MatchList from 'src/containers/MatchList';
import MessagesList from 'src/containers/ChatList';


// == Import : style
// import './chatlist.scss';

// == Composant
const ChatList = () => (
  <div className="chatlist">
    {/* <Nav nav="chat" /> */}
    <MatchList />
    <MessagesList />
  </div>
);

// == Export
export default ChatList;
