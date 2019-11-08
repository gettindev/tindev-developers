/* eslint-disable import/prefer-default-export */

export const getMaxId = (messages) => {
  let maxId = 0;
  if (messages.length > 0) {
    const idList = messages.map((message) => message.id);
    maxId = Math.max(...idList);
  }
  return maxId;
};


export const isMe = (messageAuthor, currentUser) => messageAuthor === currentUser;


export const isReceiver = (message, user) => message.filter(user === user.receiver);


export const isSender = (message, user) => message.filter(user === user.sender);
