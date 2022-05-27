const Transaction = ({ data }) => {
    const { date, type, amount } = data

    return(
        <>
            <li className="list-item">{date} - {type} - ${amount}</li>
        </>
    )
}

export default Transaction;