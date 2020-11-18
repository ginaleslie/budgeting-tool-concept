import React, { useContext, useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import ApplicationContext from "../../context/Application"
// import Category from "../Categories"

function OverViewChart() {
  const { transactions } = useContext(ApplicationContext)

  const expensesOnlyCategorizedTransactions = transactions
    .filter(expenses => expenses.amount < 0)
    .map(e => e)

  const groupedByCategory = expensesOnlyCategorizedTransactions.reduce(
    (groupedByCategory, i) => {
      const category = i.category
      if (!groupedByCategory[category]) {
        groupedByCategory[category] = []
      }
      groupedByCategory[category].push(i)
      return groupedByCategory
    },
    {}
  )

  const categoryAndSum = Object.keys(groupedByCategory).map(category => {
    return {
      category,
      categorySum: groupedByCategory[category]
        .map(e => e.amount * -1)
        .reduce(function (a, b) {
          return a + b
        }, 0),
      color: groupedByCategory[category]
        .map(e => e.color)
        .reduce(function (a) {
          return a
        }),
    }
  })
  console.log(categoryAndSum)

  const data = {
    labels: categoryAndSum.map(e => e.category),
    datasets: [
      {
        label: "item",
        data: categoryAndSum.map(e => e.categorySum),
        backgroundColor: categoryAndSum.map(e => e.color),
      },
    ],
  }

  const options = {
    title: {
      display: false,
      text: "Bar Chart",
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel
        },
      },
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90,
            padding: -160,
          }
        },
      ],
      yAxes: [
        {  
        ticks : {
          display : false,
          autoSkip: false,
            maxRotation: 90,
            minRotation: 90,
            padding: -110
        }, 
          gridLines: {
            drawOnChartArea: false,  
        },
        options: {  
            responsive: true,
            maintainAspectRatio: false
        }
          
        },
      ],
    },
  }

  return <Bar data={data} options={options} />
}

export default OverViewChart
