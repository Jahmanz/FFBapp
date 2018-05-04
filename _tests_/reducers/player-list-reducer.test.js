import playerListReducer from './../../src/reducers/player-list-reducer';
import c from './../../src/constants';

describe('playerListReducer', () => {

  let action;
  const samplePlayerData = {
    names : 'Derek Carr',
    team : 'Raiders',
    info : 'Top tier QB, new dynamic coach, should have a big season',
    timeOpen : 1500000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
   expect(playerListReducer({}, { type: null })).toEqual({});
 });

 test('Should successfully add new player data to masterPlayertList', () => {
   const { names, team, info, timeOpen, id } = samplePlayertData;
   action = {
     type: c.ADD_PLAYER,
     ...
   };
   expect(playerListReducer({}, action)).toEqual({
     [id] : {
       ...
     }
   });
 });

 test('New player should include Moment-formatted wait times', () => {
   const { names, team, info, timeOpen, id } = samplePlayertData;
   action = {
     type: c.ADD_PLAYER,
     ...
   };
   expect(playerListReducer({}, action)).toEqual({
     [id] : {
       ...
     }
   });
 });

 test('Should add freshly-calculated Moment-formatted wait time to player entry', () => {
   const { names, team, info, timeOpen, id } = samplePlayertData;
   action = {
     type: c.UPDATE_TIME,
     formattedWaitTime: '4 minutes',
     id: id
   };

    expect(playerListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        team: team,
        info: info,
        timeOpen: timeOpen,
        id: id
      }
    });
  });

});
