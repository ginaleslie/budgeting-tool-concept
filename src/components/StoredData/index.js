import React, { useEffect, useState, useContext } from "react"
import "./styles.css"
import axios from "axios"
import ApplicationContext from "../../context/Application"
import Icon from "../Icon"
import Copy from "../Copy"
import RefreshButton from "../RefreshButton"
import { categories } from "../Categories"

const LocalStorage = () => {
  const { transactions, setTransactions } = useContext(ApplicationContext)

  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: false,
  })

  const [isFetching, setIsFetching] = useState(false)

  const fetchData = () => {
    setIsFetching(true)
    axios
      .get(
        "https://indie-transaction-api.netlify.app//.netlify/functions/api/api/"
      )
      .then(response => {
        let categorizedTransactionsArray = response?.data?.transactions.map(
          transaction => {
            // by default all transactions are `uncategorized`
            const categorizedTransaction = {
              ...transaction,
              category: "uncategorized",
              color: "#F201E8",
            }

            categories.forEach(category => {
              // if a match has been found, the current category will be assigned
              // to the current product
              if (
                category.pattern.some(v =>
                  transaction.description.toLowerCase().includes(v)
                )
              ) {
                categorizedTransaction.category = category.name
                categorizedTransaction.color = category.color
              }
            })

            // this will just update all transactions with fallback or real categories
            return categorizedTransaction
          }
        )

        const data = [...transactions, ...categorizedTransactionsArray]

        localStorage.setItem("transactions", JSON.stringify(data))
        setTransactions(data)
        setIsFetching(false)
      })
  }
  console.log(transactions)

  useEffect(() => {
    console.log("run once")
    if (!isFetching) {
      if (userSettings.refreshOnLoad) {
        fetchData()
      }
    }
  }, [])
  useEffect(() => {
    setTransactions(
      transactions
        // .map(e => (e.day = days[new Date(e.date).getDay()]))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .reverse()
    )
    // transactions.map(e => (e.day = days[new Date(e.date).getDay()]))
    // transactions.map(e => (e.month = months[new Date(e.date).getMonth()]))
  })

  return (
    <div className="stored-data-container">
      <div className="max-width-stored-data">
        <div>
          <RefreshButton disabled={isFetching} click={() => fetchData()} />
        </div>
        <div className="stored-data-calender">
          <Copy color="blue-500" weight="medium" size="small">
            All transactions
          </Copy>
          <div className="calendar-styling">
            <Icon name="calendar" size="large" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalStorage
