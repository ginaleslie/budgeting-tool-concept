import React, { useState, useEffect, useContext } from 'react'
import StoredDataContext from '../../context/StoredData'
import Balance from "../Balance/Balance"
import '../../styles/Chart.css'
import LineChart from '../LineChart'
import BarChart from '../BarChart'
import DoughnutChart from '../DoughnutChart'
import Report from '../ExpensesChart'

const IncomeAndExpenses = () => {
  const { transactions } = useContext(StoredDataContext)

   const [balance, setBalance] = useState('')

   const getBalance = () => {
    const amounts = transactions.map(income => income.amount)
    const money = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    setBalance(money)
  }

  useEffect(() => {
    getBalance()
  }, [transactions])

  return (
    <div className="chart">
      <h2>Expenses</h2>
      {transactions
        .filter(expenses => expenses.amount < 0)
        .map(expenses => (
          <div>
            <pre>{JSON.stringify(expenses, null, 2)}</pre>
          </div>
        ))}

      <h2>Income</h2>
      {transactions
        .filter(income => income.amount > 0)
        .map(income => (
          <div>
            <pre>{JSON.stringify(income, null, 2)}</pre>
          </div>
        ))}
      <Balance>
        <h1 amount={balance}/>
      </Balance>
      <BarChart />    
      <LineChart /> 
      <DoughnutChart />
      <Report />
    </div>
  )
}
export default IncomeAndExpenses
