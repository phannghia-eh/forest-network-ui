import axios from 'axios'
const tx = require('../Utils/tx/index')

const UpdateUser = (user) => ({
  type: 'UPDATE_USER',
  action: {user},
});

export function fetchAccountInfo(publicKey) {
  return dispatch => {
    console.log('fetchAccountInfo')
    return axios
      .get(`https://komodo.forest.network/tx_search?query="account='${publicKey}'"`)
      .then(response => {
        console.log(response.data.result)
        // console.log('DECODE DATA', tx.decode(Buffer.from(response.data.result.txs[0].tx, 'base64')))
        // console.log('DECODE DATA', tx.decode(Buffer.from(response.data.result.txs[1].tx, 'base64')))
        dispatch(calculateTotalAmount(response.data.result))
        // response.data.result.txs.map(i => {
        //   console.log(i)
        //   console.log(decode(i.tx))
        // })
      })
      .catch(error => {
        console.error((error))
      })
  }
}

const calculateTotalAmount = result => ({
  type: 'CALCULATE_TOTAL_AMMOUNT_AFTER_FETCH',
  payload: {result: result}
})