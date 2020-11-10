import React, { useState, useContext, useEffect } from 'react'
import StoredDataContext from '../../context/StoredData'

const SortByDate = () => {
  const { transactions, setTransactions } = useContext(StoredDataContext)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

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

  // this gives an object with dates as keys
  const groups = transactions.reduce(transaction => {
    const date = transaction.date.split('T')[0]
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(transaction)
    return groups
  }, {})

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map(date => ({
    date,
    transactions: groups[date],
  }))

  console.log(groupArrays)
  return (
    <div>
      <h2>Sort by date code</h2>
      <ol>
        {groupArrays.map((item, index) => (
          <div>
            <li key={index}>{days[new Date(item.date).getDay()]}</li>
            <p>{item.date}</p>
          </div>
        ))}

        {/* <h2>
                      {filteredName.date.length > 1
                        ? days[new Date(filteredName.date).getDay()]
                        : null}
                    </h2> */}
      </ol>
    </div>
  )
}
export default SortByDate
