/* eslint-disable import/prefer-default-export */

export const getMaxId = (messages) => {
  let maxId = 0;
  if (messages.length > 0) {
    const idList = messages.map((message) => message.id);
    maxId = Math.max(...idList);
  }
  return maxId;
};
