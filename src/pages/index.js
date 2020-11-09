import React, { useState } from 'react'
import LocalStorage from '../components/StoredData'
import StoredDataContext from '../context/StoredData'
import IncomeAndExpenses from '../components/IncomeAndExpenses'

export default function Home() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )

  return (
    <StoredDataContext.Provider value={{ transactions, setTransactions }}>
      Hello developers!
      <LocalStorage />
      <IncomeAndExpenses />
    </StoredDataContext.Provider>
  )
}
