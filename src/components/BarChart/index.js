import React, { useContext } from "react"
import { Bar } from "react-chartjs-2"
import ApplicationContext from "../../context/Application"
import '../../gobalStyles/Chart.css'

function BarChart() {
  const { incomeSum, expensesSum } = useContext(
    ApplicationContext
  )

  const data = {
    labels: ["Expenses", "Income"],
    datasets: [
      {
        label: "Transactions (T)",
        data: [expensesSum, incomeSum],
        borderColor: [
          "red",
          "red",
          "red",
          "red",
          "red",
        ],
        backgroundColor: [
          "green",
          "green",
          "green",
          "green",
          "green",
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
