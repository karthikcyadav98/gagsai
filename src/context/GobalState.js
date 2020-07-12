import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Initial State
const initState = {
  transactions: []
}

//Create Gobal Context
export const GlobalContext = createContext(initState)

//Provider Component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initState)

  //Actions
  //Delete Trans
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANS',
      payload:id
    })
  }

  //Add trans 
  function addTransaction(trans) {
    dispatch({
      type: 'ADD_TRANS',
      payload: trans
    })
  }
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction}}>
    {children}
    </GlobalContext.Provider>
  )
}