import React,{useContext} from 'react'
import {GlobalContext} from '../../context/GobalState'

const Balance = () => {

  const { transactions } = useContext(GlobalContext)
  
  let total = 0
  transactions.map((item) => {
    total = total + Number(item.amount)
  })

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance
