import React from 'react';
import Title from './Title'
import CSS from './InfoComps.css';
const InfoBox = (props) => {
  return <div className={CSS.InfoBox}>
            <Title name={props.name} />
        </div>
};
export default InfoBox;