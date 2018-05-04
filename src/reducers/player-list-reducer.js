import c from './../constants';

export default (state = {}, action) => {
  let newState;
  const { names, team, info, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case c.ADD_TASK:
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        team: team,
        info: info,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case c.UPDATE_TIME:
    const NewPlayerControl = Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, {
      [id]: NewPlayerControl
    });
    return newState;

  default:
    return state;
  }
};
