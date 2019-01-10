import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import InfoBox from './../../Components/InfoComps/InfoBox.jsx'
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    render(){
        let {shares, shareIdx} = this.props;
        return (<div className={CSS.InfoBoxes}>
                    <div onClick={()=>this.props.onNext()} className={[CSS.Arrow,"fas fa-arrow-left"].join(' ')}></div>
                    <InfoBox name = {shares[shareIdx].name} /> 
                    <div onClick={()=>this.props.onPrev()} className={[CSS.Arrow,CSS.Arrow,"fas fa-arrow-right"].join(' ')}></div>
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
        onNext: () => dispatch({type:actionTypes.NEXT_STOCK}),
        onPrev: () => dispatch({type:actionTypes.PREV_STOCK}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);
