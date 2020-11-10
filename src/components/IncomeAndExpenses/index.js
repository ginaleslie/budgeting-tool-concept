import React, { useContext, useEffect } from 'react'

import StoredDataContext from '../../context/StoredData'

import '../../styles/Chart.css'

import LineChart from '../LineChart'
import BarChart from '../BarChart'
import DoughnutChart from '../DoughnutChart'
import Report from '../ExpensesChart'

const IncomeAndExpenses = () => {
  const {
    transactions,
    expenseValuesArray,
    setExpenseValuesArray,
  } = useContext(StoredDataContext)

  // useEffect(() => {
  //   setExpenseValuesArray(
  //     transactions
  //       .filter(expenses => expenses.amount < 0)
  //       .map(e => e.amount * -1)
  //   )
  // })

  console.log(expenseValuesArray)
  return (
    <div className="chart">
      {/* <pre>{JSON.stringify(expenseValuesArray, null, 2)}</pre> */}
      <h2>Expenses</h2>
      {transactions
        .filter(expenses => expenses.amount < 0)
        .map(expenses => (
          <div key={expenses}>
            <pre>{JSON.stringify(expenses, null, 2)}</pre>
          </div>
        ))}

      <h2>Income</h2>
      {transactions
        .filter(income => income.amount > 0)
        .map(income => (
          <div key={income}>
            <pre>{JSON.stringify(income, null, 2)}</pre>
          </div>
        ))}

      {/* <LineChart /> */}
      <BarChart />
      {/* <DoughnutChart />
      <Report /> */}
    </div>
  )
}
export default IncomeAndExpenses
