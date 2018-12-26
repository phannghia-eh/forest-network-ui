import {browserHistory} from "react-router";
const {Keypair} = require('stellar-base');

export function login(data) {
  console.log('PRIVATE KEY:', data.privateKey)
  return dispatch => {
    const publicKey = Keypair.fromSecret(data.privateKey).publicKey()
    let listPrivateKey = JSON.parse(localStorage.getItem('privateKeys'))
    if (!listPrivateKey.filter(i => i === data.privateKey).length)
      listPrivateKey.push(data.privateKey)
    localStorage.setItem('privateKeys', JSON.stringify(listPrivateKey))

    dispatch(updatePrivateAndPublicKey({privateKey: data.privateKey, publicKey: publicKey}))
    browserHistory.push('/')
  }
}

const updatePrivateAndPublicKey = data => ({
  type: 'UPDATE_PRIVATE_AND_PUBLIC_KEY',
  payload: data
})