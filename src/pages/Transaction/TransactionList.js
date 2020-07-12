import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GobalState'
import Transaction from './Transaction'

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext)
  console.log('ajhbd', transactions)

  return (
    <div>
    <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => (
          <Transaction item={item}/>
        ))}
      
      </ul>
    </div>
  )
}

export default TransactionList
