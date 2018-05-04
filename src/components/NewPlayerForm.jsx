import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';


function NewPlayerForm(props){
  let _names = null;
  let _team = null;
  let _info-notes = null;

  function handleNewPlayerFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TASK',
      id: v4(),

      names: _names.value,
      team: _team.value,
      info-notes: _info-notes.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    _names.value = '';
    _team.value = '';
    _info-notes.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPlayerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='team'
          placeholder='Area for info-notes'
          ref={(input) => {_team = input;}}/>
        <textteam
          id='info-notes'
          placeholder='Describe your info-notes.'
          ref={(textteam) => {_info-notes = textteam;}}/>
        <button type='submit'>Add Player!</button>
      </form>
    </div>
  );
}

export default connect()(NewPlayerForm);
