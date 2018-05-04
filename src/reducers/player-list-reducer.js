export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_PLAYER':
    const { names, team, info, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        names: names,
        team: team,
        info: info,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
