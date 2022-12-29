import { useState } from "react";
import Message from "./Message";

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

    const [message, setMessage] = useState('')

    const hanldeBudget = event => {
        event.preventDefault()

        if(!budget || budget < 0){
            setMessage('Presupuesto no valido')

            return
        }

        setMessage('')
        setIsValidBudget(true)
    }

    return (
        <div className="budget-container container shadow">
            <form onSubmit={hanldeBudget} className="form">
                <div className="field">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        className="new-budget"
                        type="number"
                        placeholder="Tu presupuesto aqui"
                        value={budget}
                        onChange={event => setBudget(Number(event.target.value))} 
                    />

                    <input type="submit" value="Anadir" />

                    {message && <Message type='error'>{message}</Message>}
                </div>
            </form>
        </div>
    )
}

export default NewBudget