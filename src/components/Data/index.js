import React, { useEffect, useContext } from 'react'
import GetDataFromApi from '../FetchData'
import DataFromApiContext from '../../context/DataFromApi'
import LocalStorage from '../LocalStorage'

const Data = () => {
  // retrieving data from use context
  const { fetchedTransactions, setFetchedTransactions } = useContext(
    DataFromApiContext
  )

  // updating new transactions
  useEffect(() => {
    GetDataFromApi(setFetchedTransactions)
  }, [setFetchedTransactions])

  return (
    <div>
      <button onClick={() => alert('clicked')} type="button">
        refresh
      </button>
      <LocalStorage />
      new
      <pre> {JSON.stringify(fetchedTransactions, null, 2)} </pre>
    </div>
  )
}
export default Data
