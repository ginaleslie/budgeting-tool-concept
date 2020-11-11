import React, { useState } from 'react'
import LocalStorage from '../components/StoredData'
import ApplicationContext from '../context/Application'
// import SortByDate from '../components/SortByDate'
import Category from '../components/gCategory'

const CategoryPage = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )

  return (
    <ApplicationContext.Provider value={{ transactions, setTransactions }}>
      <LocalStorage />
      <Category />
    </ApplicationContext.Provider>
  )
}
export default CategoryPage
