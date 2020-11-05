import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import DataFromApiContext from '../../context/DataFromApi'
// import { useLocalStorage } from '../LocalStorage'

const getDataFromApi = async setFetchedTransactions => {
  try {
    const response = await axios.get(
      'https://indie-transaction-api.netlify.app//.netlify/functions/api/api/'
    )

    setFetchedTransactions(response.data.transactions)

    localStorage.setItem(
      'quentinTarantino',
      JSON.stringify(response.data.transactions)
    )
  } catch (err) {
    console.error(err.message)
  }
}

const Data = () => {
  const [fetchedTransactions, setFetchedTransactions] = useState({})

  // const [stored, setStored] = useState([])

  useEffect(() => {
    getDataFromApi(setFetchedTransactions)
  }, [setFetchedTransactions])

  // const onRefresh = () => {
  //   getDataFromApi(setFetchedTransactions)

  //   if (data.length === 0) {
  //     console.log('0')
  //   } else {
  //     console.log('hello')
  //   }
  // }

  const storedstuff = JSON.parse(localStorage.getItem('quentinTarantino'))

  console.log(storedstuff)
  return (
    <div>
      <button
        onClick={() => getDataFromApi(setFetchedTransactions)}
        type="button"
      >
        refresh
      </button>

      <pre> {JSON.stringify(fetchedTransactions, null, 2)} </pre>
    </div>
  )
}
export default Data
