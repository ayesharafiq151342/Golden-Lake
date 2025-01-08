import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesPurchaseChart = () => {
  const chartData = {
    labels: ['Jan-2025'],
    datasets: [
      {
        label: 'Sales',
        data: [2400000],
        backgroundColor: 'blue',
      },
      {
        label: 'Purchase',
        data: [0],
        backgroundColor: 'red',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales vs Purchase',
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default SalesPurchaseChart;
