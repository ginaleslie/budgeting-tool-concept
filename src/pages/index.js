import React, { useEffect, useState } from "react"
import "../gobalStyles/reset.css"
import ApplicationContext from "../context/Application"
import Login from "../components/Login"
import Overview from "../components/Overview"
import StoredData from "../components/StoredData"
import Navigation from "../components/Navigation"
import Track from "../components/Track"
import Budget from "../components/Budget"

export default function Home() {
  const [incomeSum, setIncomeSum] = useState(0)
  const [expensesSum, setExpensesSum] = useState(0)

  const [activeTab, setActiveTab] = useState("")

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  )

  const [userLoggedin, setUserLoggedin] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  )

  useEffect(() => {
    const haventLoggedIn = localStorage.haventLoggedIn === "false" // change "true" to true and others to false
    setUserLoggedin(haventLoggedIn)
    localStorage.setItem("haventLoggedIn", !haventLoggedIn)
  }, [])

  return (
    <ApplicationContext.Provider
      value={{
        transactions,
        setTransactions,
        userLoggedin,
        setUserLoggedin,
        incomeSum,
        setIncomeSum,
        expensesSum,
        setExpensesSum,
        activeTab,
        setActiveTab,
      }}
    >
      <Navigation
        headingForNav={
          activeTab === "Overview"
            ? "Overview stuff"
            : activeTab === "Budget"
            ? "Budget stuff"
            : "Track stuff"
        }
      />
      {!userLoggedin && <Login />}
      {activeTab === "Overview" ? <Overview /> : null}
      {activeTab === "Track" ? <Track /> : null}
      {activeTab === "Budget" ? <Budget /> : null}
      <StoredData />
    </ApplicationContext.Provider>
  )
}
