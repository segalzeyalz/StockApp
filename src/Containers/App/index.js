import React, { Component } from 'react';
import Header from '../../Components/Header'
import InfoBoxes from './../InfoBoxes'
import * as actionTypes from './../../Store/Actions';
import { connect } from 'react-redux';
import CSS from './App.css';

class App extends Component {
  componentDidMount(){
    this.props.updateTimes()
}
componentDidUpdate(){
  this.props.updateTimes()
}
  render() {
    return (
      <div className={CSS.App}>
              <Header />
              <InfoBoxes/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
      updateTimes: () => dispatch({type:actionTypes.UPDATE_TIMES})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);