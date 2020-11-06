import React, { useEffect, useContext, useState, useMemo } from 'react'
import DataFromApiContext from '../../context/DataFromApi'

const useLocalStorage = () => {
  // use context hooks
  const {
    fetchedTransactions,
    setFetchedTransactions,
    storage,
    setStorage,
  } = useContext(DataFromApiContext)
  // storedTransactions is equal to the name of the item in storage else it's an empty array

  // const initialValue = [fetchedTransactions]

  const initial = JSON.parse(localStorage.getItem('21237')) || []

  useEffect(() => {
    setStorage(initial)
  }, [initial, setStorage])

  // useEffect(() => {
  //   // if storedTransactions is an empty array then the fetched data from the api is stored
  //   if (storage.length === 0) {
  //     localStorage.setItem('21237', JSON.stringify(fetchedTransactions))
  //   }
  //   // setStorage(JSON.parse(localStorage.getItem('19')))
  // }, [fetchedTransactions, setFetchedTransactions, storage.length])

  // console.log(storedTransactions)

  return (
    <div>
      stored
      <pre> {JSON.stringify(storage, null, 2)} </pre>
    </div>
  )
}

export default useLocalStorage

// import React, { useEffect, useState } from "react";
// import "./styles.css";
// import axios from "axios";

// export default function App() {
//   const [transactions, setTransactions] = useState(
//     JSON.parse(localStorage.getItem("transactions") || "[]")
//   );

//   const [isFetching, setIsFetching] = useState(false);

//   const fetchData = () => {
//     setIsFetching(true);
//     axios
//       .get(
//         "https://indie-transaction-api.netlify.app//.netlify/functions/api/api/"
//       )
//       .then((response) => {
//         const data = [...transactions, ...response?.data?.transactions];

//         localStorage.setItem("transactions", JSON.stringify(data));
//         setTransactions(data);
//         setIsFetching(false);
//       });
//   };

//   useEffect(() => {
//     console.log("run once");
//     if (!isFetching) {
//       fetchData();
//     }
//   }, []);

//   return (
//     <div className="App">
//       <h1>data from state</h1>
//       <button
//         onClick={() => {
//           localStorage.removeItem("transactions");
//           setTransactions([]);
//         }}
//       >
//         clear localStorage
//       </button>
//       <button disabled={isFetching} onClick={() => fetchData()}>
//         fetch new data
//       </button>
//       items in store {transactions.length}
//       <pre>{JSON.stringify(transactions, null, 2)}</pre>
//     </div>
//   );
// }
