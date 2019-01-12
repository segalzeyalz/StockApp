import React from 'react';
import Title from './Title';
import ShareVal from './ShareVal.jsx';
import CSS from './InfoComps.css';
const InfoBox = (props) => {
  return <div className={CSS.InfoBox}>
            <Title name={props.share.name} />
            <ShareVal val={props.share.price}/>
        </div>
};
export default InfoBox;