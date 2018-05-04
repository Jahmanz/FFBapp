import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_PLAYER:
    return action.playerId;
  default:
    return state;
  }
};
