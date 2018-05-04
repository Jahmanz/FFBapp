import Moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Player(props){

  function handleSavingSelectedPlayer(playerId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_PLAYER',
      playerId: playerId
    };
    dispatch(action);
  }

  const playerInformation =
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
      <h4><bold>{props.names}</bold></h4>
      <h3>{props.team} - {props.info}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/playerinfo'){
    return (
      <div onClick={() => {handleSavingSelectedPlayer(props.playerId);}}>
        {playerInformation}
      </div>
    );
  } else {
    return (
      <div>
        {playerInformation}
      </div>
    );
  }
}

Player.propTypes = {
  names: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  info: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  playerId: PropTypes.string.isRequired
};

export default connect()(Player);
