import React from 'react';
import CSS from './InfoComps.css';
const Precentage = (props) => {
  return <h2>{props.absVal} ({props.percent}%)</h2>
};
export default Precentage;