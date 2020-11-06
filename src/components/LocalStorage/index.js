import React, { useEffect, useState } from 'react'
// import './styles.css'
import axios from 'axios'

const LocalStorage = () => {
  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: false,
  })
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem('transactions') || '[]')
  )

  const [isFetching, setIsFetching] = useState(false)

  const fetchData = () => {
    setIsFetching(true)
    axios
      .get(
        'https://indie-transaction-api.netlify.app//.netlify/functions/api/api/'
      )
      .then(response => {
        const data = [...transactions, ...response?.data?.transactions]

        localStorage.setItem('transactions', JSON.stringify(data))
        setTransactions(data)
        setIsFetching(false)
      })
  }

  useEffect(() => {
    console.log('run once')
    if (!isFetching) {
      if (userSettings.refreshOnLoad) {
        fetchData()
      }
    }
  }, [])

  return (
    <div className="App">
      <h1>data from state</h1>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem('transactions')
          setTransactions([])
        }}
      >
        clear localStorage
      </button>
      <button type="button" disabled={isFetching} onClick={() => fetchData()}>
        fetch new data
      </button>
      items in store {transactions.length}
      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>
  )
}

export default LocalStorage
