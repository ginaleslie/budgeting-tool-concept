import React, { useState } from 'react'
import LocalStorage from '../components/StoredData'
import StoredDataContext from '../context/StoredData'
import SortByDate from '../components/SortByDate'

const SortByDatePage = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )

  return (
    <StoredDataContext.Provider value={{ transactions, setTransactions }}>
      <LocalStorage />
      <SortByDate />
    </StoredDataContext.Provider>
  )
}
export default SortByDatePage
