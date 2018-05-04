import React from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import NewPlayerControl from './NewPlayerControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import PlayerInfo from './PlayerInfo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updatePlayerElapsedWaitTime(),
    10000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePlayerElapsedWaitTime() {
    // var newMasterPlayerList = Object.assign({}, this.state.masterPlayerList);
    // Object.keys(newMasterPlayerList).forEach(playerId => {
    //   newMasterPlayerList[playerId].formattedWaitTime = (newMasterPlayerList[playerId].timeOpen).fromNow(true);
    // });
    // this.setState({masterPlayerList: newMasterPlayerList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><PlayerList playerList={this.props.masterPlayerList} />} />
          <Route path='/newplayer' render={()=><NewPlayerControl />} />
          <Route path='/playerinfo' render={(props)=><PlayerInfo currentRouterPath={props.location.pathname} />} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterPlayerList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPlayerList: state.masterPlayerList
  };
};

export default withRouter(connect(mapStateToProps)(App));
