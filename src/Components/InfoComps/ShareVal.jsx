import React from 'react';
import CSS from './InfoComps.css';
const ShareVal = (props) => {
  return <h1 title="stock value" className={CSS.ShareVal}>{props.val}</h1>
};
export default ShareVal;