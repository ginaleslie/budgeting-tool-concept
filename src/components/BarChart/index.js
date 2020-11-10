import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2'
import StoredDataContext from '../../context/StoredData'

function BarChart() {
  const { transactions } = useContext(StoredDataContext)

  const expenseValuesArray = transactions
    .filter(expenses => expenses.amount < 0)
    .map(e => e.amount * -1)

  const incomeValuesArray = transactions
    .filter(income => income.amount > 0)
    .map(e => e.amount)

  const expensesSum = expenseValuesArray.reduce(function (a, b) {
    return a + b
  }, 0)

  const incomeSum = incomeValuesArray.reduce(function (a, b) {
    return a + b
  }, 0)

  const data = {
    labels: ['Expenses', 'Income'],
    datasets: [
      {
        label: 'Sales for 2020 (M)',
        data: [expensesSum, incomeSum],
        borderColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: 'Bar Chart',
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
