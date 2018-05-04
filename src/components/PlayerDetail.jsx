import React from 'react';
import PropTypes from 'prop-types';

function PlayerDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedPlayer.names} - {props.selectedPlayer.team}</h1>
      <h2>Submitted {props.selectedPlayer.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedPlayer.info-notes}</em></h4>
      <hr/>
    </div>
  );
}

PlayerDetail.propTypes = {
  selectedPlayer: PropTypes.object
};

export default PlayerDetail;
