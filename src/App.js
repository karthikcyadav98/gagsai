import React from 'react';
import './App.css';

import Header from './pages/common/Header'
import Balance from './pages/balance/Balance'
import IncomeExpense from './pages/Income/IncomeExpense'
import TransactionList from './pages/Transaction/TransactionList'
import AddTrans from './pages/addTrans/AddTrans'

import {GlobalProvider} from './context/GobalState'

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTrans/>
      </div>
    </GlobalProvider>
  );
}

export default App;
