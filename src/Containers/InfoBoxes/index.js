import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import InfoBox from './../../Components/InfoComps/InfoBox.jsx';
import Spinner from './../../Components/Spinner'
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    componentDidMount(){
        this.props.updateTimes()
    }
    render(){
        let {shares, shareIdx} = this.props;
        return (<div className={CSS.InfoBoxes}>
                    <div onClick={()=>this.props.onNext()} className={[CSS.Arrow,"fas fa-arrow-left"].join(' ')}></div>
                    <InfoBox share = {shares[shareIdx]} /> 
                    <div onClick={()=>this.props.onPrev()} className={[CSS.Arrow,CSS.Arrow,"fas fa-arrow-right"].join(' ')}></div>
                    <Spinner/>
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
        updateCurrencyRate: (newCurrency) => dispatch({type:actionTypes.UPDATE_CURRENCY_RATE,newCurrency:newCurrency}),
        updateTimes: (newTime) => dispatch({type:actionTypes.UPDATE_TIMES,newTime:newTime})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);
