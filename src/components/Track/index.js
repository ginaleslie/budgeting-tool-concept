import React, { useContext, useState } from "react"
import "./styles.css"
import Copy from "../Copy"
import Heading from "../Heading"
import BarChartCategories from "../BarChartCategories"
import ApplicationContext from "../../context/Application"
import CategoryButton from "../CategoryButton"
import Accordion from "../Accordion"

const Track = () => {
  const {
    incomeSum,
    expensesSum,
    setActiveCategory,
    activeCategory,
    transactions,
  } = useContext(ApplicationContext)

  const [
    displayCategoryTransactions,
    setDisplayCategoryTransactions,
  ] = useState(false)

  const [transactionClicked, setTransactionClicked] = useState(false)

  const currentBalance = incomeSum - expensesSum

  console.log(transactions)

  const expensesOnlyCategorizedTransactions = transactions
    .filter(expenses => expenses.amount < 0)
    .map(e => e)

  const groupedByCategory = expensesOnlyCategorizedTransactions.reduce(
    (groupedByCategory, i) => {
      const category = i.category
      if (!groupedByCategory[category]) {
        groupedByCategory[category] = []
      }
      groupedByCategory[category].push(i)
      return groupedByCategory
    },
    {}
  )

  const categoryAndSum = Object.keys(groupedByCategory).map(category => {
    return {
      category,
      categorySum: groupedByCategory[category]
        .map(e => e.amount * -1)
        .reduce(function (a, b) {
          return a + b
        }, 0),
      color: groupedByCategory[category]
        .map(e => e.color)
        .reduce(function (a) {
          return a
        }),
    }
  })
  console.log(categoryAndSum)

  return (
    <div className="track-bg">
      <div className="track-max-width">
        <div
          className={
            !displayCategoryTransactions
              ? "track-chart-max-width"
              : "hide-element"
          }
        >
          <Copy color="blue-700" pt="pt-medium">
            Current Balance
          </Copy>
          <Heading
            color="wealth-grey-500"
            weight="bold"
            size="xxmedium"
            pt="pt-xsmall"
          >
            R {currentBalance}
          </Heading>
          <div className="track-chart-container">
            <BarChartCategories />
          </div>
        </div>
        <div className={!displayCategoryTransactions ? null : "hide-element"}>
          <div className="track-flex-money">
            <div className="track-flex-money-first-child">
              <Heading
                size="medium"
                color="blue-700"
                weight="bold"
                pt="pt-large"
              >
                Money out
              </Heading>
            </div>
            <Heading size="medium" color="neutral" weight="bold" pt="pt-large">
              Money in
            </Heading>
          </div>
          <Heading
            size="xmedium"
            color="centennial-500"
            weight="medium"
            pt="pt-large"
            pb="pb-large"
          >
            All Categories
          </Heading>

          {categoryAndSum.map((category, index) => (
            <CategoryButton
              key={index}
              click={() => {
                setActiveCategory(category.category)
                setDisplayCategoryTransactions(true)
                console.log(activeCategory)
              }}
            >
              <div className="track-flex">
                <div
                  className="square"
                  style={{ background: category.color }}
                ></div>
                {category.category}
              </div>
            </CategoryButton>
          ))}
        </div>
        <div
          className={
            displayCategoryTransactions
              ? "category-transactions"
              : "hide-element"
          }
        >
          <button
            className="track-back-button"
            onClick={() => {
              setDisplayCategoryTransactions(false)
            }}
          >
            <i className="arrow-back left"></i>
            Back
          </button>
          <div className="track-flex-money">
            <div className="track-flex-money-first-child">
              <Heading
                size="medium"
                color="blue-700"
                weight="bold"
                pt="pt-large"
              >
                Money out
              </Heading>
            </div>
            <Heading size="medium" color="neutral" weight="bold" pt="pt-large">
              Money in
            </Heading>
          </div>
          <Heading
            size="xmedium"
            color="centennial-500"
            weight="medium"
            pt="pt-large"
            pb="pb-large"
          >
            {activeCategory === null ? "Placeholder" : activeCategory}
          </Heading>
          {activeCategory !== null
            ? transactions
                .filter(
                  transaction =>
                    transaction.category.includes(activeCategory) &&
                    transaction.amount < 0
                )
                .map((transaction, index) => (
                  <Accordion
                    key={index}
                    title={transaction.description}
                    date={transaction.date.split("T")[0]}
                    amount={transaction.amount * -1}
                    color={transaction.color}
                    addToFood={() => {
                      transaction.category = "food"
                      transaction.color = "#0163B8"
                    }}
                    addToHousehold={() => {
                      transaction.category = "household"
                      transaction.color = "#76C2B6"
                    }}
                    // category={transaction.category}
                    // changeCategory={() =>
                    //   //   {
                    //   //   transaction.category = "food"
                    //   // }
                    //   setDisplayChangeCategory(true)
                    // }
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  )
}
export default Track
