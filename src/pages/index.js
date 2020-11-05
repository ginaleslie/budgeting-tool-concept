import React, { useState } from 'react'
import Data from '../components/Data'
import DataFromApiContext from '../context/DataFromApi'

export default function Home() {
  const [fetchedTransactions, setFetchedTransactions] = useState({})

  return (
    <DataFromApiContext.Provider
      value={{ setFetchedTransactions, fetchedTransactions }}
    >
      <h1>Hello developers!</h1>
      <Data />
    </DataFromApiContext.Provider>
  )
}
