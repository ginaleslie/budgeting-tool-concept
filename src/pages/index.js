import React, { useEffect, useState } from "react"
import "../gobalStyles/reset.css"
import ApplicationContext from "../context/Application"
import Login from "../components/Login"
import Overview from "../components/Overview"
import Navigation from "../components/Navigation"
import Track from "../components/Track"
import Budget from "../components/Budget"

export default function Home() {
  const [incomeSum, setIncomeSum] = useState(0)
  const [expensesSum, setExpensesSum] = useState(0)

  const [activeCategory, setActiveCategory] = useState(null)

  const [activeTab, setActiveTab] = useState("Overview")

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  )

  const [userLoggedin, setUserLoggedin] = useState(
    JSON.parse(localStorage.getItem("loggedIn"))
  )
  const [activeTransaction, setActiveTransaction] = useState([])

  const [newCategory, setNewCategory] = useState({ name: "", color: "red" })

  const [
    displayCategoryTransactions,
    setDisplayCategoryTransactions,
  ] = useState(false)

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
        activeCategory,
        setActiveCategory,
        activeTransaction,
        setActiveTransaction,
        displayCategoryTransactions,
        setDisplayCategoryTransactions,
        newCategory,
        setNewCategory,
      }}
    >
      {!userLoggedin ? (
        <Login />
      ) : (
        <Navigation
          headingForNav={
            activeTab === "Overview"
              ? "Overview stuff"
              : activeTab === "Budget"
              ? "Budget stuff"
              : "Track your spending."
          }
        />
      )}

      {(activeTab === "Overview") & userLoggedin ? <Overview /> : null}
      {(activeTab === "Track") & userLoggedin ? <Track /> : null}
      {(activeTab === "Budget") & userLoggedin ? <Budget /> : null}
    </ApplicationContext.Provider>
  )
}
