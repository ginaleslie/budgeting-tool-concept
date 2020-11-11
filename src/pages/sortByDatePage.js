import React, { useState } from 'react'
import LocalStorage from '../components/StoredData'
import ApplicationContext from '../context/Application'
import SortByDate from '../components/SortByDate'

const SortByDatePage = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )

  return (
    <ApplicationContext.Provider value={{ transactions, setTransactions }}>
      <LocalStorage />
      <SortByDate />
    </ApplicationContext.Provider>
  )
}
export default SortByDatePage
