import Transaction from "./Transaction"

const Transactions = ({ history }) => {
    const transactionList = history.map((transaction, index) => {
        return(
            <>
                <Transaction data={transaction} key={index}/>
            </>
        )
    })

    return(
        <>
            <h5>Transaction History</h5>
            <div className="list-wrapper">
                <ul className="list">
                    {transactionList}
                </ul>
            </div>
            
        </>
    )
}

export default Transactions;