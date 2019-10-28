module.exports = {
  isMatchingAlreadyExist: (current, swiped, Model) => {
    // we check if the matching already exist
    // a matching is an entry with the two user id
    // if the entry doen't exist we can create a matching
    const query = Model.filter((matching) => (
      matching.swipedUserId === parseInt(current, 10)
      && matching.currentUserid === parseInt(swiped, 10)
    ));
    return query;
  },
  updateMatchingResult: (id, yepOrNope, Model) => {
    // Because the matching exist,
    // we juste need to change the second status value
    // we have null, now we can pass it to true for a YEP
    const query = Model.find((match) => match.id === id);
    if (yepOrNope) {
      query.swipedUserStatus = true;
      return query;
    }
    query.swipedUserStatus = false;
    return query;
  },
  createNewMatching: (currentUser, yepOrNope, swipedUser, Model) => {
    const newMatch = {
      id: Model.length + 1,
      currentUserid: parseInt(currentUser, 10),
      currentUserStatus: yepOrNope,
      swipedUserId: parseInt(swipedUser, 10),
      swipedUserStatus: null,
    };
    Model.push(newMatch);
    return newMatch;
  },
};
