import React, { useState } from 'react'
import LocalStorage from '../components/StoredData'
import StoredDataContext from '../context/StoredData'
import './Chart.css'

import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import DoughnutChart from '../components/DoughnutChart'
import Report from '../components/ExpensesChart'

export default function Home() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )




  return (

    <StoredDataContext.Provider value={{ transactions, setTransactions }}>
      Hello developers!
      <LocalStorage />
      <div className='chart'>
       <LineChart /> 
       <BarChart /> 
       <DoughnutChart />
       <Report />
      </div>
    </StoredDataContext.Provider>
  
}
