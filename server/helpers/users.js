module.exports = {
  getUsernameAndAvatar: (userArray, userModel) => (
    userModel.filter((info) => userArray.includes(info.id))
  ),
};
