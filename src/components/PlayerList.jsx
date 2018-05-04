import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

function PlayerList(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
        <hr/>
        {Object.keys(props.playerList).map(function(playerId) {
          var player = props.playerList[playerId];
          return <Player names={player.names}
            team={player.team}
            info-notes={player.info-notes}
            formattedWaitTime={player.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            key={playerId}
            playerId={playerId} />;
        })}
      </div>
    );
  }

  PlayerList.propTypes = {
    playerList: PropTypes.object,
    currentRouterPath: PropTypes.string
  };

  export default PlayerList;
