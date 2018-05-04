import selectedPlayerReducer from './../../src/reducers/selected-player-reducer';
import c from './../../src/constants';

describe("selectedPlayerReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedPlayerReducer({}, { type: null })).toEqual({});
  });

  test('Should record which player has been selected by user', () => {
    expect(selectedPlayerReducer({}, { type: c.SELECT_PLAYER, playerId: 1 })).toEqual(1);
  });

});
