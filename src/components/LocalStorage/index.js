import React, { useEffect, useContext } from 'react'
import DataFromApiContext from '../../context/DataFromApi'

const useLocalStorage = () => {
  // use context hooks
  const { fetchedTransactions, setFetchedTransactions } = useContext(
    DataFromApiContext
  )
  // storedTransactions is equal to the name of the item in storage else it's an empty array
  const storedTransactions = JSON.parse(localStorage.getItem('stored')) || []

  useEffect(() => {
    // if storedTransactions is an empty array then the fetched data from the api is stored
    if (storedTransactions.length === 0) {
      localStorage.setItem('stored', JSON.stringify(fetchedTransactions))
    } else {
      return console.log('hello')
    }
  }, [fetchedTransactions, setFetchedTransactions, storedTransactions.length])

  console.log(storedTransactions)

  return (
    <div>
      stored
      <pre> {JSON.stringify(storedTransactions, null, 2)} </pre>
    </div>
  )
}

export default useLocalStorage
