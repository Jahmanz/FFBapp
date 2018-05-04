import rootReducer from './../../src/reducers/index';
import selectedTaskReducer from './../../src/reducers/selected-task-reducer';
import taskListReducer from './../../src/reducers/task-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTaskList: {},
      selectedTask: {}
    });
  });
  test('New player should include Moment-formatted wait times', () => {
    const { names, team, info, timeOpen, id } = samplePlayerData;
    action = {
      type: 'ADD_PLAYER',
      names: names,
      team: team,
      info: info,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(playerListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        team: team,
        info: info,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('Should contain taskListReducer logic', () => {
    expect(store.getState().masterTaskList).toEqual(taskListReducer(undefined, { type: null }));
  });

  test('Should contain selectedTaskReducer logic', () => {
    expect(store.getState().selectedTask).toEqual(selectedTaskReducer(undefined, { type: null }));
  });

});
