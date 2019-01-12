import React from 'react';
import CSS from './InfoComps.css';
const Precentage = (props) => {
    let str = '';
    let CSSClass;
    if(props.absVal>=0){
        str+= `+${props.absVal} (+${props.percent}%)`;
        CSSClass = CSS.PositiveValue;
    }else{
        str+= `${props.absVal} (${props.percent}%)`;
        CSSClass = CSS.NegativeValue;
    }
  return <h2 className={CSSClass}>{str}</h2>
};
export default Precentage;