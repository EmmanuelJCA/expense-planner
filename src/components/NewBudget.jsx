import { useState } from "react";
import Message from "./Message";

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('')

    const hanldeBudget = event => {
        event.preventDefault()

        if(!Number(budget) || Number(budget) < 0){
            setMessage('Presupuesto no valido')
        } else {

        }
    }

    return (
        <div className="budget-container container shadow">
            <form onSubmit={hanldeBudget} className="form">
                <div className="field">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        className="new-budget"
                        type="text"
                        placeholder="Tu presupuesto aqui"
                        value={budget}
                        onChange={event => setBudget(event.target.value)} 
                    />

                    <input type="submit" value="Anadir" />

                    {message && <Message type='error'>{message}</Message>}
                </div>
            </form>
        </div>
    )
}

export default NewBudget