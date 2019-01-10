import React, { Component } from 'react';
import Header from '../../Components/Header'
import InfoBoxes from './../InfoBoxes'
import CSS from './App.css';

class App extends Component {
  render() {
    return (
      <div className={CSS.App}>
              <Header />
              <InfoBoxes/>
      </div>
    );
  }
}

export default App;
