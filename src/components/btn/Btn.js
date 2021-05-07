import React from 'react';
import './Btn.css';

function Btn(props) {
  return (
    <button className="btn">
     {props.text}
    </button>
  );
}

export default  Btn;
