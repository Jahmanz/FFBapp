export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TASK':
    const { names, team, info-notes, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        names: names,
        team: team,
        info-notes: info-notes,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
