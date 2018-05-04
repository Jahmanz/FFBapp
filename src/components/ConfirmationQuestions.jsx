import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
      <p>Like to add player to draft list?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
