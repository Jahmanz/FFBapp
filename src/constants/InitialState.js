const playerList = {
  1: 'Hard worker, leader, top tier QB, new dynamic coach should elevate him to new level'.split(', '),
  2: 'Young, led the league in rusing last season, offense will start and end with him'.split(', ')
};

export const initialState = {
  currentPlayerId: 1,
  playersById: {
    1: {
      names: 'Derek Carr',
      team: 'Raiders',
      playerId: 1,
      playerArray: playerList[1],
      arrayPosition: 0,
    },
    2: {
      names: 'Kareem Hunt',
      team: 'Chiefs',
      playerId: 2,
      playerArray: playerList[2],
      arrayPosition: 0,
    }
  }
};
