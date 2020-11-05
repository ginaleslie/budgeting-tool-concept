import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import DataFromApiContext from '../../context/DataFromApi'
import { useLocalStorage } from '../LocalStorage'

const getDataFromApi = async setFetchedTransactions => {
  try {
    const response = await axios.get(
      'https://indie-transaction-api.netlify.app//.netlify/functions/api/api/'
    )

    setFetchedTransactions(response.data.transactions)
  } catch (err) {
    console.error(err.message)
  }
}

const Data = () => {
  const { fetchedTransactions, setFetchedTransactions } = useContext(
    DataFromApiContext
  )

  // useEffect(() => {
  //   if (theme)
  //   setTheme(fetchedTransactions)
  // }, [fetchedTransactions, setTheme])

  // console.log(storedTheme)
  // const [stored, setStored] = useState([])
  const storedstuff = JSON.parse(localStorage.getItem('quentinTarantino'))

  useEffect(() => {
    if (storedstuff.length === 0) {
      localStorage.setItem(
        'quentinTarantino',
        JSON.stringify(fetchedTransactions)
      )
    } else {
      return console.log('hello')
    }
  }, [fetchedTransactions, setFetchedTransactions, storedstuff.length])

  // const onRefresh = () => {
  //   getDataFromApi(setFetchedTransactions)

  //   if (data.length === 0) {
  //     console.log('0')
  //   } else {
  //     console.log('hello')
  //   }
  // }

  console.log(storedstuff.length)

  // console.log(storedstuff)
  return (
    <div>
      <button
        onClick={() => getDataFromApi(setFetchedTransactions)}
        type="button"
      >
        refresh
      </button>

      <pre> {JSON.stringify(storedstuff, null, 2)} </pre>
    </div>
  )
}
export default Data
