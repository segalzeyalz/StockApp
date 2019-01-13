import React,  { Component }  from 'react';
import Title from './Title';
import ShareVal from './ShareVal.jsx';
import HighChart from './HighChart'
import Precentage from './Percentage.jsx';
import CSS from './InfoComps.css';
class InfoBox extends Component {
  componentWillReceiveProps(){
    console.log("sdasd")
  }
  render(props) {
    return (
      <div className={CSS.InfoBox}>
                  <div className={CSS.flexContainer}>
                    <div className={CSS.ShareInfoContainer}>
                      <Title name={this.props.share.name} />
                      <ShareVal val={this.props.share.price}/>
                      <Precentage absVal={this.props.share.absVal} percent = {this.props.share.percentage}/>
                    </div>
                    <HighChart share={this.props.share}/>
                  </div>
              </div>
    )
  }
}

export default InfoBox;
