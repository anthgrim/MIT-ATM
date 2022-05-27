const Transactions = ({ history }) => {
    const transactionList = history.map((transaction) => {
        return(
            <>
            {transaction.date} - {transaction.type} - ${transaction.amount}
            </>
        )
    })

    return(
        <>
            <h5>Transaction History</h5>
        </>
    )
}

export default Transactions;