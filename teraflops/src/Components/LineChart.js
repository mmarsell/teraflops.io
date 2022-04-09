import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import APIService from "./APIService";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function LineChart({props}){
    const [chart, setChart] = useState([]);

    const labels = props.Date;

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };

    const chartData = {
        label: props.Date,
        datasets :[
        {
            label: 'Dataset 1',
            data: props.Close

        }]
    }

    function plot(data){
        console.log(data);
    }

    return (
        <div>
            <Line options={options} data={chartData} />  
        </div>

    );


}

export default LineChart;