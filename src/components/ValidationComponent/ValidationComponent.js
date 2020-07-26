import React from 'react';

let ValidationComponent = props => {

  let response = <p>Text not long enpough</p>

  if (props.len > 5) {
    response = <p>Text length is sufficient</p>
  }

  return response
}

export default ValidationComponent;