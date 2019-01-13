import React, { Component } from 'react';
import Spinner from '../Spinner';
import Highcharts from 'react-highcharts'

class HighChart extends Component {
  render(props) {
    let arr = [];
    for(let j=0; j<360; j++){
      arr=[...arr, j]
    }
    let showSpinner = false;
    let config = {
      title:{align:"center",
        floating:false,
        style:{ "color": "#333333", "fontSize": "18px" },
        text:this.props.title},
        xAxis: { title:{text:"Time"},
          categories: this.props.times
        },
        series: [{
          data: this.props.data
        }]
      };
      if(showSpinner){
        return (<Spinner/>)
      }
    return (
      <div className={CSS.HighChart}>
        <Highcharts config={config}/>
      </div>
    );
  }
}

export default HighChart;
