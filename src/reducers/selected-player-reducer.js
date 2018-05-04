export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_PLAYER':
    return action.playerId;
  default:
    return state;
  }
};
