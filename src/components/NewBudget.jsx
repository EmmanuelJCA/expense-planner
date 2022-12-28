import { useState } from "react";

const NewBudget = () => {
    return (
        <div className="budget-container container shadow">
            <form className="form">
                <div className="field">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        className="new-budget"
                        type="text"
                        placeholder="Tu presupuesto aqui" 
                    />

                    <input type="submit" value="Anadir" />
                </div>
            </form>
        </div>
    )
}

export default NewBudget