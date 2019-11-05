// == Import : npm
import React from 'react';

// == Import : local
// import MenuNav from './Menu';
import Nav from 'src/components/Nav';
import MatchList from 'src/components/ChatList/MatchList';
// import MessagesList from 'src/components/ChatList/MessagesList';


// == Import : style
// import './chatlist.scss';

// == Composant
const ChatList = ({ mymatches }) => (
  <div className="chatlist">
    {/* <Nav nav="chat" /> */}
    <MatchList mymatches={mymatches} />
    {/* <MessagesList /> */}
  </div>
);

// == Export
export default ChatList;
