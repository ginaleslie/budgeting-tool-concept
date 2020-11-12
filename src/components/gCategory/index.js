import React from "react";


export default function App() {
  const transactions = [
    {
      amount: -725,
      description: "PLASTER",
      date: "2020-01-06T00:00:00.000Z"
    },
    {
      amount: -400,
      description: "#MONTHLY ACCOUNT FEE",
      date: "2020-01-24T00:00:00.000Z"
    },
    {
      amount: -872,
      description: "SnapScan Goodeggs 123456*1234",
      date: "2020-01-25T00:00:00.000Z"
    },
    {
      amount: -862,
      description: "JERRYS DINNER",
      date: "2020-01-11T00:00:00.000Z"
    },
    {
      amount: -414,
      description: "SnapScan Rooir 123456*1234",
      date: "2020-01-16T00:00:00.000Z"
    },
    {
      amount: -1322,
      description: "CHECKERS MOUNTAIN 123456*1234",
      date: "2020-01-07T00:00:00.000Z"
    },
    {
      amount: -768,
      description: "SnapScan Vadas Smok 123456*1234",
      date: "2020-01-17T00:00:00.000Z"
    },
    {
      amount: -597,
      description: "ANIMAL HOSP 123456*1234",
      date: "2020-01-07T00:00:00.000Z"
    },
    {
      amount: -943,
      description: "SpotifyZA 123456*1234",
      date: "2020-01-08T00:00:00.000Z"
    }
  ];

  const categories = [
    {
      icon: "🎧",
      name: "entertaiment",
      pattern: "spotify"
    },
    {
      icon: "🍔",
      name: "food",
      pattern: "checkers"
    },
    {
      icon: "💸",
      name: "bank",
      pattern: "account fee"
    }
  ];

  // this will categorize all transaction, it only
  // checks if pattern is included within description
  let categorizedTransactions = transactions.map((transaction) => {
    // by default all transactions are `uncategorized`
    const categorizedTransaction = {
      ...transaction,
      category: "uncategorized"
    };

    categories.forEach((category) => {
      // if a match has been found, the current category will be assigned
      // to the current product
      if (transaction.description.toLowerCase().includes(category.pattern)) {
        categorizedTransaction.category = category.name;
      }
    });

    // this will just update all transactions with fallback or real categories
    return categorizedTransaction;
  });

  return (
    <div className="App">
      <h1>all transactions</h1>

      <ul>
        {transactions.map((transaction) => (
          <li>{transaction.description}</li>
        ))}
      </ul>

      <h1>all categorizedTransactions</h1>

      <ul>
        {categorizedTransactions.map((transaction) => (
          <li>
            {transaction.description} {transaction.category}
          </li>
        ))}
      </ul>

      <hr />

      {/* this will take the pure transaction list and categorizes and filters them on render */}
      <h1>by category</h1>
      {categories.map((category) => (
        <>
          <h2>{category.name}</h2>
          <ul>
            {transactions
              .filter((transaction) => {
                return transaction.description
                  .toLowerCase()
                  .includes(category.pattern);
              })
              .map((transaction) => (
                <li>{transaction.description}</li>
              ))}
          </ul>
        </>
      ))}
    </div>
  );
}
