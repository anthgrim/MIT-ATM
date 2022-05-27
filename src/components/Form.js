import { useState } from "react"

const Form = ( { onTransaction, handleTransactionHistory, currentBalance } ) => {
    const [ amount, setAmount ] = useState(0)

    const handleChange = e => {
        const { value } = e.target
        const newAmount = parseFloat(value)
        setAmount(newAmount)
    }

    const handleDeposit = () => {
        if(amount <= 0){
            alert("Deposit amount is invalid")
            setAmount(0)
            return
        }

        //Create Transaction History
        const today = new Date()

        const newTransactionHistory = {
            date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
            type: "Deposit",
            amount: amount
        }

        onTransaction(amount)
        handleTransactionHistory(newTransactionHistory)
        setAmount(0)
    }

    const handleCashBack= () => {
        if(amount <= 0){
            alert("Cash Back amount is invalid")
            setAmount(0)
            return
        }
        if(amount > currentBalance){
            alert("Not enough balance to execute transaction")
            setAmount(0)
            return
        }

        //Create Transaction History
        const today = new Date()

        const newTransactionHistory = {
            date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
            type: "Cash Back",
            amount: amount
        }

        onTransaction(-amount)
        handleTransactionHistory(newTransactionHistory)

        setAmount(0)
    }

    return (
        <>
            <div className="form-wrapper">
                <div className="custom-form">
                    <span className="form-title">Welcome User!</span>
                    <section className="input-wrapper">
                        <label className="custom-label" htmlFor="Deposit">Amount</label>
                        <input 
                            className="custom-input"
                            type='number'
                            name="deposit"
                            value={amount}
                            onChange={e => handleChange(e)}
                        />
                    </section>
                   
                   <section className="btn-wrapper">
                       <button className="custom-btn btn-green" onClick={handleDeposit}>Deposit</button>
                       <button className="custom-btn btn-red" onClick={handleCashBack}>Cash Back</button>
                   </section>
                </div>
            </div>
        </>
    )
}

export default Form