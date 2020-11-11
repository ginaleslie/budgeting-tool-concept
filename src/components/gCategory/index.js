import React, { useState, useContext, useEffect } from "react"
import ApplicationContext from "../../context/Application"

const Category = () => {
  const { transactions, setTransactions } = useContext(ApplicationContext)

  const categories = [
    {
      title: "Food",
      stores: [
        "PNP",
        "CHECKERS",
        "WOOLWORTHS",
        "SEATTLE",
        "JERRYS",
        "SuperSpar",
        "HEALTHFOOD",
        "SUSHI",
      ],
      transactions: [],
    },
    { title: "Medical", stores: ["CLICKS"], transactions: [] },
    { title: "Uncategorised", stores: ["LOREM"], transactions: [] },
  ]

  const [activeCategory, setActiveCategory] = useState("")
  console.log(activeCategory)

  // const groups = transactions.reduce(transaction => {
  //   date => date.stores.map()
  //   if (!groups[date]) {
  //     groups[date] = []
  //   }
  //   groups[date].push(transaction)
  //   return groups
  // }, {})

  // // Edit: to add it in the array format instead
  // const groupArrays = Object.keys(groups).map(date => ({
  //   date,
  //   transactions: groups[date],
  // }))

  // console.log(groupArrays)

  return (
    <div>
      <h2>categories</h2>
      {categories.map(category => category.stores.map(item => <p>{item}</p>))}

      {categories.map(category => (
        <button
          type="button"
          onClick={() => {
            setActiveCategory("")
            setActiveCategory(current => [...current, category])
          }}
        >
          {category.title}
        </button>
      ))}

      {activeCategory.length !== 0 ? <p>hh</p> : null}
    </div>
  )
}
export default Category