import axios from 'axios'

const GetDataFromApi = async setFetchedTransactions => {
  try {
    // getting url to fetch data
    const response = await axios.get(
      'https://indie-transaction-api.netlify.app//.netlify/functions/api/api/'
    )
    // stores all transactions into fetchedTransactions hook
    setFetchedTransactions(response.data.transactions)
  } catch (err) {
    console.error(err.message)
  }
}
export default GetDataFromApi
