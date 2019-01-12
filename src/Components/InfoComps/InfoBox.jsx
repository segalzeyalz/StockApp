import React from 'react';
import Title from './Title';
import ShareVal from './ShareVal.jsx';
import HighChart from './HighChart'
import CSS from './InfoComps.css';
const InfoBox = (props) => {
  return <div className={CSS.InfoBox}>
            <div className={CSS.flexContainer}>
              <HighChart/>
            </div>
        </div>
};
export default InfoBox;