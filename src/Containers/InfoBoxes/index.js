import React, { Component } from 'react';
import * as actionTypes from './../../Store/Actions';
import { connect } from 'react-redux';
import CSS from './InfoBoxes.css';

class InfoBoxes extends Component {
    render(){
        return (<div className={CSS.InfoBoxes}>
                    {this.props.sharesName.map((elem)=>{
                        return <h1>{elem}</h1>
                    })}
                    <h1 className={CSS.title}>
                        Stockff App        
                    </h1>
        </div>)
    }
}
const mapStateToProps = state => {
    return {
        sharesName: state.sharesName
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getSharesName: ()=> dispatch({type: actionTypes.Get_Shares_Name}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoBoxes);
