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

  const [displayOverview, setDisplayOverview] = useState(true)

  const [displayTrack, setDisplayTrack] = useState(false)

  const [displayBudget, setDisplayBudget] = useState(false)

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
        setDisplayTrack,
        setDisplayBudget,
        setDisplayOverview,
      }}
    >
      {!userLoggedin && <Login />}
      {/* {if (userLoggedin, displayOverview, !displayTrack, !displayBudget)  { return(
        <div>
          <Navigation headingForNav="Welcome" />
          <Overview />
        </div>
      )} else if ()} */}
      {(() => {
        if ((userLoggedin, displayOverview, !displayTrack, !displayBudget)) {
          return (
            <div>
              <Navigation headingForNav="Welcome" />
              <Overview />
            </div>
          )
        } else if (
          (userLoggedin, !displayOverview, !displayTrack, displayBudget)
        ) {
          return (
            <div>
              <Navigation headingForNav="Budget" />
              <Budget />
            </div>
          )
        } else {
          return (
            <div>
              <Navigation headingForNav="sss" />
              <Track />
            </div>
          )
        }
      })()}

      <StoredData />
    </ApplicationContext.Provider>
  )
}
