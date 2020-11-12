import React, { useContext } from "react"
import { Bar } from "react-chartjs-2"
import ApplicationContext from "../../context/Application"

function BarChart() {
  const { transactions, incomeSum, expensesSum } = useContext(
    ApplicationContext
  )

  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [expensesSum, incomeSum],
        borderColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxis: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  }

  return <Bar data={data} options={options} />
}

export default BarChart
