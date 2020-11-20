/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react"
import "typeface-roboto"
import "../../gobalStyles/globalCssVariables.css"
import "./styles.css"
import Heading from "../Heading"
import ApplicationContext from "../../context/Application"
import CategoryButton from "../CategoryButton"

const FilteredCategories = ({ transactions }) => {
  const { setDisplayCategoryTransactions, setActiveCategory } = useContext(
    ApplicationContext
  )

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
    <div>
      <div className="track-flex-money">
        <div className="track-flex-money-first-child">
          <Heading size="medium" color="blue-700" weight="bold" pt="pt-large">
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
  )
}

export default FilteredCategories
