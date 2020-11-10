import React, { useState } from 'react'
import LocalStorage from '../components/StoredData'
import StoredDataContext from '../context/StoredData'
import SortByDate from '../components/SortByDate'
import Category from '../components/gCategory'

const CategoryPage = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )

  return (
    <StoredDataContext.Provider value={{ transactions, setTransactions }}>
      <LocalStorage />
      <Category />
    </StoredDataContext.Provider>
  )
}
export default CategoryPage
