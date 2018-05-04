import selectedPlayerReducer from './selected-player-reducer';
import playerListReducer from './player-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedPlayer: selectedPlayerReducer,
  masterPlayerList: playerListReducer
});

export default rootReducer;
