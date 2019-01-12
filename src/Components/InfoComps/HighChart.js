import React, { Component } from 'react';
import Highcharts from 'react-highcharts'

class HighChart extends Component {
  render(props) {
    let config = {
      title:{align:"center",
        floating:false,
        style:{ "color": "#333333", "fontSize": "18px" },
        text:this.props.title},
        xAxis: { title:{text:"Time"},
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
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
