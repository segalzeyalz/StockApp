import React from 'react';
import Title from './Title';
import ShareVal from './ShareVal.jsx';
import HighChart from './HighChart'
import Precentage from './Percentage.jsx';
import CSS from './InfoComps.css';
const InfoBox = (props) => {
  return <div className={CSS.InfoBox}>
            <div className={CSS.flexContainer}>
              <div className={CSS.ShareInfoContainer}>
                <Title name={props.share.name} />
                <ShareVal val={props.share.price}/>
                <Precentage absVal={5} percent = {2}/>
              </div>
              <HighChart times={props.share.times} data={props.share.data} title={props.share.symbol}/>
            </div>
        </div>
};
export default InfoBox;
