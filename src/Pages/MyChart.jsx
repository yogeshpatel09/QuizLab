import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Data = [
    { "Month": "jan", "Value": "500" },
    { "Month": "feb", "Value": "100" },
    { "Month": "mar", "Value": "300" },
    { "Month": "apr", "Value": "700" },
    { "Month": "may", "Value": "400" },
    { "Month": "jun", "Value": "1000" }
];

function MyChart() {

    const lables = Data.map(iteam => iteam.Month);
    console.log(lables);
    const value = Data.map(iteam => iteam.Value);
    console.log(value);
    
    const chartData = {
        labels: lables,
        datasets: [
            {
                label: 'Monthly Values',
                data: value,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Value',
                },
                beginAtZero: true,
            },
        },
    };

  return  (
    <div>
        <h2>Line Chart Example</h2>
        <Line data={chartData} options={options} />
    </div>
);
}

export default MyChart
