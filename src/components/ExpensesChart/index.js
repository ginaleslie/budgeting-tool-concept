import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const Report = () => {
  const [chartData, setChartData] = useState({});
  const [transaction, setTransaction] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const chart = () => {
    let expenses = [];
    let income = [];
    axios
      .get('https://indie-transaction-api.netlify.app//.netlify/functions/api/api/')
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          expenses.push(parseInt(dataObj.expenses));
          income.push(parseInt(dataObj.income));
        }
        setChartData({
          labels: expenses,
          datasets: [
            {
              label: "level of thiccness",
              data: expenses,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(expenses, income);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Summery</h1>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default Report;
