import React, { useContext } from 'react'

import {GlobalContext} from '../../context/GobalState'

const IncomeExpense = () => {

  const { transactions } = useContext(GlobalContext)
  
  let income = 0
  let expense = 0
  transactions.map((item) => {
    if (item.amount > 0) {
      income = income + Math.abs(item.amount)
    } else {
      expense = expense + Math.abs(item.amount)
    }
  })

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
