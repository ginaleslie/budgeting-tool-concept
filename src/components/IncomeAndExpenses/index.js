import React, { useContext, useEffect } from "react"

import ApplicationContext from "../../context/Application"
import Icon from "../Icon"
import Copy from "../Copy"
import Heading from "../Heading"

const IncomeAndExpenses = () => {
  const { transactions, setIncomeSum, setExpensesSum } = useContext(
    ApplicationContext
  )

  const expenseValuesArray = transactions
    .filter(expenses => expenses.amount < 0)
    .map(e => e.amount * -1)

  const incomeValuesArray = transactions
    .filter(income => income.amount > 0)
    .map(e => e.amount)

  const expensesSum = expenseValuesArray.reduce(function (a, b) {
    return a + b
  }, 0)

  const incomeSum = incomeValuesArray.reduce(function (a, b) {
    return a + b
  }, 0)
  useEffect(() => {
    setIncomeSum(incomeSum)
    setExpensesSum(expensesSum)
  })

  return (
    <div className="income-and-expenses">
      <div className="income-and-expenses-grid">
        <div className="income-and-expenses-grid">
          <Icon name="arrowUp" size="medium" />
          <div className="pl-xsmall">
            <Copy color="white" size="xsmall">
              INCOME
            </Copy>
            <Copy color="white" size="medium" weight="medium" pt="pt-xxsmall">
              R {incomeSum}
            </Copy>
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="income-and-expenses-grid">
          <div className="pr-xsmall">
            <Copy color="white" size="xsmall">
              EXPENSES
            </Copy>
            <Copy color="white" size="medium" weight="medium" pt="pt-xxsmall">
              R {expensesSum}
            </Copy>
          </div>
          <Icon name="arrowDown" size="medium" />
        </div>
      </div>
    </div>
  )
}
export default IncomeAndExpenses
