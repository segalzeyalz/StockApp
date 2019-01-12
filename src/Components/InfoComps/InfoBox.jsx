import React from 'react';
import Title from './Title';
import ShareVal from './ShareVal.jsx';
import HighChart from './HighChart'
import CSS from './InfoComps.css';
const InfoBox = (props) => {
  return <div className={CSS.InfoBox}>
            <div className={CSS.flexContainer}>
              <div className={CSS.ShareInfoContainer}>
                <Title name={props.share.name} />
                <ShareVal val={7898464}/>
              </div>
              <HighChart/>
            </div>
        </div>
};
export default InfoBox;