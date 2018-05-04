import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import c from './../constants';



function NewPlayerForm(props){
  let _names = null;
  let _team = null;
  let _info = null;

  function handleNewPlayerFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: c.ADD_PLAYER,
      id: v4(),
      names: _names.value,
      team: _team.value,
      info: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _team.value = '';
    _info.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPlayerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Player Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='team'
          placeholder='Team'
          ref={(input) => {_team = input;}}/>
        <textarea
          id='info'
          placeholder='Daft Notes/Info.'
          ref={(textarea) => {_info = textarea;}}/>
        <button type='submit'>Add Player!</button>
      </form>
    </div>
  );
}

export default connect()(NewPlayerForm);
