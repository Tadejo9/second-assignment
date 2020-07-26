import React from 'react';
import './CharComponent.css';

let CharComponent = props => {
  return (
    <div className="box" onClick={props.deleteHandler}>
      <p>{props.char}</p>
    </div>
  ) 
}

export default CharComponent;