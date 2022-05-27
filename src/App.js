import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'
import Balance from './components/Balance';
import Transactions from './components/Transactions';
import './App.css';


function App() {
  const [ balance, setBalance ] = useState(0)
  const [ transactionsHistory, setTransactionsHistory ] = useState([])

  const handleTransaction = (deposit) => {
    setBalance(prevBalance => prevBalance + deposit)
  }

  const handleTransactionHistory = (newTransactionHistory) => {
    setTransactionsHistory(prevTransactionHistory => ([...prevTransactionHistory, newTransactionHistory]))
  }

  return (
    <div className="App">
      <Navbar />
      <Form onTransaction={handleTransaction} handleTransactionHistory={handleTransactionHistory} currentBalance={balance}/>
      <Balance balance={balance}/>
      <Transactions history={transactionsHistory}/>
    </div>
  );
}

export default App;
