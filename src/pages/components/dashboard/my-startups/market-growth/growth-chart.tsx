import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['year1', 'year2', 'year3', 'year4', 'year5', 'year6'],
  datasets: [
    {
      label: '',
      data: [5, 10, 20, 30, 40, 50],
      backgroundColor: '#9AE179',
      borderColor: '#9AE179',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        stepSize: 10,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Market Growth over 6 Years',
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const MarketGrowthChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};
