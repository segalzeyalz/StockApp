import React, { Component } from 'react';
import Highcharts from 'react-highcharts'

class HighChart extends Component {
  render(props) {
    let arr = [];
    for(let j=0; j<360; j++){
      arr=[...arr, j]
    }
    console.log(this.props.data)
    let config = {
      title:{align:"center",
        floating:false,
        style:{ "color": "#333333", "fontSize": "18px" },
        text:this.props.title},
        xAxis: { title:{text:"Time"},
          categories: Array.isArray(this.props.times)?this.props.times:arr
        },
        series: [{
          data: Array.isArray(this.props.data)?this.props.data:arr
        }]
      };
    return (
      <div className={CSS.HighChart}>
        <Highcharts config={config}/>
      </div>
    );
  }
}

export default HighChart;
