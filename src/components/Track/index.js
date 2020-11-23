import React, { useContext, useState, useCallback } from "react"
import "./styles.css"
import "typeface-roboto"
import Copy from "../Copy"
import Heading from "../Heading"
import BarChartCategories from "../BarChartCategories"
import ApplicationContext from "../../context/Application"

import { categories } from "../Categories"
import RadioButtonList from "../RadioButtonList"
import FilteredCategories from "../FilteredCategories"
import CreateNewCategory from "../CreateNewCategory"

import Accordion from "../Accordion"

const Track = () => {
  const {
    incomeSum,
    expensesSum,
    setActiveCategory,
    activeCategory,
    transactions,
    activeTransaction,
    setActiveTransaction,
    displayCategoryTransactions,
    setDisplayCategoryTransactions,
    newCategory,
    setNewCategory,
  } = useContext(ApplicationContext)

  const [displayCreateNewCategory, setDisplayCreateNewCategory] = useState(
    false
  )

  const currentBalance = incomeSum - expensesSum

  const [value, setValue] = React.useState(categories[0].name)

  const onChange = React.useCallback(e => {
    setValue(e.target.value)
  })

  console.log(value)
  console.log(activeTransaction)

  return (
    <div className="track-bg">
      <div className="track-max-width">
        {/* -------------- first section of track 
            -------------- where categories are selected */}
        <div className={!displayCategoryTransactions ? null : "hide-element"}>
          <div className="track-chart-max-width">
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

          <FilteredCategories transactions={transactions} />
        </div>

        {/* -------------- second section of track 
            -------------- where transactions are selected */}
        <div
          className={
            displayCategoryTransactions
              ? "category-transactions"
              : "hide-element"
          }
        >
          {activeTransaction.length === 0 ? (
            <div>
              <button
                className="track-back-button"
                onClick={() => {
                  setDisplayCategoryTransactions(false)
                  setDisplayCreateNewCategory(false)
                }}
              >
                <i className="arrow-back arrow-left"></i>
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
                <Heading
                  size="medium"
                  color="neutral"
                  weight="bold"
                  pt="pt-large"
                >
                  Money in
                </Heading>
              </div>
              <div className="capitalize">
                <Heading
                  size="xmedium"
                  color="centennial-500"
                  weight="medium"
                  pt="pt-large"
                  pb="pb-large"
                >
                  {activeCategory === null ? "Placeholder" : activeCategory}
                </Heading>
              </div>
            </div>
          ) : null}

          {activeCategory !== null &&
          activeTransaction.length === 0 &&
          displayCreateNewCategory === false
            ? transactions
                .filter(
                  transaction =>
                    transaction.category.includes(activeCategory) &&
                    transaction.amount < 0
                )
                .map((transaction, index) => (
                  <Accordion
                    key={index}
                    selected={transaction}
                    title={transaction.description}
                    date={transaction.date.split("T")[0]}
                    amount={transaction.amount * -1}
                    handleClick={() => setActiveTransaction(transaction)}
                    color={transaction.color}
                  />
                ))
            : null}

          {/* -------------- third section of track 
              -------------- where changing categories is an option */}

          {activeTransaction.length !== 0 ? (
            <div>
              <button
                className="track-back-button"
                onClick={() => {
                  setActiveTransaction([])
                  setDisplayCategoryTransactions(null)
                  setDisplayCreateNewCategory(false)
                }}
              >
                <i className="arrow-back arrow-left"></i>
                Back
              </button>
              <Heading
                size="xmedium"
                color="centennial-500"
                weight="medium"
                pt="pt-large"
                pb="pb-large"
              >
                {displayCreateNewCategory
                  ? `Create new category for ${activeTransaction.description}`
                  : `Change category for ${activeTransaction.description}`}
              </Heading>
            </div>
          ) : null}

          {activeTransaction.length !== 0 && displayCreateNewCategory === false
            ? transactions
                .filter(transaction =>
                  transaction.id.includes(activeTransaction.id)
                )
                .map(transaction => (
                  <RadioButtonList
                    value={value}
                    onChange={onChange}
                    categories={categories}
                    key={transaction}
                    saveCategoryPreference={() => {
                      transaction.category = value
                      categories
                        .filter(e => e.name === value)
                        .map(e => {
                          transaction.color = e.color
                        })

                      setActiveTransaction([])
                      setDisplayCategoryTransactions(null)
                    }}
                    createNewCategory={() => {
                      setDisplayCreateNewCategory(true)
                      // setActiveTransaction([])
                    }}
                  />
                ))
            : null}

          {/* -------------- fourth section of track 
              -------------- where users create a new category */}

          {displayCreateNewCategory === true
            ? transactions
                .filter(transaction =>
                  transaction.id.includes(activeTransaction.id)
                )
                .map(transaction => (
                  <CreateNewCategory
                    click={() => {
                      categories.push(newCategory)
                      transaction.category = newCategory.name
                      transaction.color = newCategory.color
                      console.log(categories)
                      setActiveTransaction([])
                      setDisplayCategoryTransactions(null)
                      setDisplayCreateNewCategory(false)
                    }}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  )
}
export default Track
