import React from 'react';
import Title from './Title'
import CSS from './InfoComps.css';
const InfoBox = (props) => {
  console.log(props.share)
  return <div className={CSS.InfoBox}>
            <Title name={props.share.name} />
            <h1>{props.share.price}</h1>
        </div>
};
export default InfoBox;