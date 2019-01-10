import React from 'react';
import CSS from './InfoComps.css';
const Title = (props) => {
  return <h1 className={CSS.Title}>{props.name}</h1>
};
export default Title;