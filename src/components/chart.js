import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DoughnutChart = () => {
  const data = {
    labels: ['Web Development'],
    datasets: [
      {
        label: 'Skills in React',
        data: [90,10],
        backgroundColor: [
          '#9900FF',
          '#000000',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#000000',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: 'white',
        display: true,
        formatter: (value) => `${value}%`,
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  return (
    <div className='chart'>
      <Doughnut data={data} options={options} />
      <h6 className='chartlabel'>Web Development</h6>
    </div>
  );
};

export default DoughnutChart;