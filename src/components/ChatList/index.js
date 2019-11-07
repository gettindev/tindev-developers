// == Import : npm
import React from 'react';

// == Import : local
// import MenuNav from './Menu';
import Nav from 'src/components/Nav';
import MatchList from 'src/components/ChatList/MatchList';
import MessagesList from 'src/components/ChatList/MessagesList';


// == Import : style
// import './chatlist.scss';

// == Composant
const ChatList = ({ myMatches, lastMessages }) => {
  console.log(mymatches);
  return (
    <div className="chatlist">
      {/* <Nav nav="chat" /> */}
      <MatchList myMatches={myMatches} />
      <MessagesList lastMessages={lastMessages} />
    </div>
  );

  // == Export
};

  export default ChatList;
