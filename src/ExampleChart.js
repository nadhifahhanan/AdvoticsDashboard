import React from 'react';
import { Bar } from 'react-chartjs-2';
// import { storiesOf, action, linkTo } from '@kadira/storybook';
import { useSelector, useDispatch } from 'react-redux'

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },

        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true
        },
        labels: {
          show: true
        }
      },
      {
        type: 'linear',
        display: false,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};



export default function ExampleChart() {
  const chartData = useSelector(state => {
    return state.changeDate.randomData;
  })
  console.log(chartData)
  const data = {
    datasets: [{
      label: 'Sales',
      type: 'line',
      data: chartData,
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F',
      yAxisID: 'y-axis-2'
    }, {
      type: 'bar',
      label: 'Visitor',
      data: chartData,
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
      yAxisID: 'y-axis-1'
    }]
  };

  return <Bar data={data} options={options} />;
}