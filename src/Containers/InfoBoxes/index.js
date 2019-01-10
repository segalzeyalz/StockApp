import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import InfoBox from './../../Components/InfoComps/InfoBox.jsx'
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    render(){
        return (<div className={CSS.InfoBoxes}>
                    {this.props.shares.map((elem)=>{
                        return <InfoBox name = {elem.name} />
                    })}
                </div>)
    }
}
const mapStateToProps = state => {
    return {
        shares: state.shares
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getSharesName: ()=> dispatch({type: actionTypes.Get_Shares_Name}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);
