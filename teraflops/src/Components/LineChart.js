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

function LineChart(props){
    const [chart, setChart] = useState(0);

    return (
        <div>
            <p>{props.data}</p> 
        </div>

    );


}

export default LineChart;