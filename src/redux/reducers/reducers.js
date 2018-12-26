// let { RpcClient } = require('tendermint')
import {decode} from "../Utils/tx";

const tx = require('../Utils/tx/index')

let default_state = {
  publicKey: '',
  privateKey: '',
  address: null,
  account: {
    ammount: 0,
    sequence: 0,
    bandwidth: 0
  },
  // rpc_clien: RpcClient('wss://komodo.forest.network:443')
};


export default (state = default_state, action) => {
  switch (action.type) {
    case 'CALCULATE_TOTAL_AMMOUNT_AFTER_FETCH': {
      let tmpAmmount = 0
      for (let i = 0; i < action.payload.result.total_count; i++) {
        const tmp = tx.decode(Buffer.from(action.payload.result.txs[i].tx, 'base64'))
        if (tmp.operation === 'payment') {
          tmpAmmount += tmp.params.amount
        }
        console.log(tmp)
      }
      return {
        ...state,
        account: {
          ...state.account,
          ammount: tmpAmmount,
          sequence: action.payload.result.total_count
        }
      }
    }
    case 'FETCH_ACCOUNT_INFO':
      return {
        ...state,
        account: action.payload.account
      }
    case 'UPDATE_PRIVATE_AND_PUBLIC_KEY':
      console.log(action.payload)
      return {
        ...state,
        publicKey: action.payload.publicKey,
        privateKey: action.payload.privateKey
      }
    default:
      return state
  }
}