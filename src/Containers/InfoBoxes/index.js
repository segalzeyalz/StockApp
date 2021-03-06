import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import InfoBox from './../../Components/InfoComps/InfoBox';
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    componentWillMount(){
        this.props.updateTimes()
    }
    componentDidMount(){
        this.props.updateTimes()
    }
    render(){
        let {shares, shareIdx} = this.props;
        return (<div className={CSS.InfoBoxes}>
                    <div onClick={()=>this.props.onNext()} className={[CSS.Arrow,"fas fa-arrow-left"].join(' ')}></div>
                    <InfoBox share = {shares[shareIdx]} /> 
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
        updateTimes: () => dispatch({type:actionTypes.UPDATE_TIMES})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);