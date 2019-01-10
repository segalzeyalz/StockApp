import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import InfoBox from './../../Components/InfoComps/InfoBox.jsx'
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    render(){
        let {shares, shareIdx} = this.props;
        return (<div className={CSS.InfoBoxes}>
                    <div className={[CSS.Arrow,"fas fa-arrow-left"].join(' ')}></div>
                    <InfoBox name = {shares[shareIdx].name} /> 
                    <div className={[CSS.Arrow,"fas fa-arrow-right"].join(' ')}></div>
                </div>)
    }
}
const mapStateToProps = state => {
    return {
        shares: state.shares,
        shareIdx: state.shareNum
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);
