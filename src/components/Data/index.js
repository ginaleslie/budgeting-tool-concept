import React, { useEffect, useContext } from 'react'
import GetDataFromApi from '../FetchData'
import DataFromApiContext from '../../context/DataFromApi'
import LocalStorage from '../LocalStorage'

const Data = () => {
  // retrieving data from use context
  const {
    fetchedTransactions,
    setFetchedTransactions,
    storage,
    setStorage,
  } = useContext(DataFromApiContext)

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
      {/* stored
      <pre> {JSON.stringify(storage, null, 2)} </pre> */}
      new
      <pre> {JSON.stringify(fetchedTransactions, null, 2)} </pre>
    </div>
  )
}
export default Data
