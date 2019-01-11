import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import InfoBox from './../../Components/InfoComps/InfoBox.jsx'
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    componentDidMount(){
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.props.shares[this.props.shareIdx].symbol}&interval=1min&outputsize=full&apikey=8QEUI4X`)
        .then(response => response.json())
        .then(data => this.props.updateTimes(data));
    }
    componentWillUpdate(){
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.props.shares[this.props.shareIdx].symbol}&interval=1min&outputsize=full&apikey=8QEUI4X`)
        .then(response => response.json())
        .then(data => this.props.updateTimes(data));
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
        updateCurrencyRate: (newCurrency) => dispatch({type:actionTypes.UPDATE_CURRENCY_RATE,newCurrency:newCurrency}),
        updateTimes: (newTime) => dispatch({type:actionTypes.UPDATE_TIMES,newTime:newTime})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);
