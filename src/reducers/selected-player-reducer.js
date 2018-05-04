export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_TASK':
    return action.playerId;
  default:
    return state;
  }
};
