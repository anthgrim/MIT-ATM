import { useState } from "react"

const Form = ( { onDeposit } ) => {
    const [ deposit, setDeposit ] = useState(0)

    const handleChange = e => {
        const { value } = e.target
        const newDeposit = parseFloat(value)
        setDeposit(newDeposit)
    }

    const handleSubmit = e => {
        e.preventDefault()
        onDeposit(deposit)
        setDeposit(0)
    }

    return (
        <>
            <div className="form-wrapper">
                <form className="custom-form" onSubmit={e => handleSubmit(e)}>
                    <span className="form-title">Deposit</span>
                    <section className="input-wrapper">
                        <label className="custom-label" htmlFor="Deposit">Make a Deposit</label>
                        <input 
                            className="custom-input"
                            type='number'
                            name="deposit"
                            value={deposit}
                            onChange={e => handleChange(e)}
                        />
                    </section>
                   
                   <section className="btn-wrapper">
                       <button className="custom-btn">Submit</button>
                   </section>
                </form>
            </div>
        </>
    )
}

export default Form