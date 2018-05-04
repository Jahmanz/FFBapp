import React from 'react';
import PropTypes from 'prop-types';
import PlayerList from './PlayerList';
import PlayerDetail from './PlayerDetail';
import { connect } from 'react-redux';

function PlayerInfo(props){
  let optionalSelectedPlayerContent = null;
  if (props.selectedPlayer.length > 0){
    optionalSelectedPlayerContent =  <PlayerDetail selectedPlayer={props.playerList[props.selectedPlayer]}/>;
  }
  return (
    <div>
      <h2>Edit Player</h2>
      {optionalSelectedPlayerContent}
      <PlayerList
        playerList={props.playerList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

PlayerInfo.propTypes = {
  playerList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedPlayer: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedPlayer: state.selectedPlayer,
    playerList: state.masterPlayerList
  };
};

export default connect(mapStateToProps)(PlayerInfo);
