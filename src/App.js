import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form'
import './App.css';
import Balance from './components/Balance';

function App() {
  const [ balance, setBalance ] = useState(0)

  const handleDeposit = (deposit) => {
    setBalance(prevBalance => prevBalance + deposit)
  }

  return (
    <div className="App">
      <Navbar />
      <Form onDeposit={handleDeposit} currentBalance={balance}/>
      <Balance balance={balance}/>
    </div>
  );
}

export default App;
