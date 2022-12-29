import { useState } from "react";
import NewBudget from "./NewBudget";

const Header = ({budget, setBudget, isValidBudget, setIsValidBudget}) => {

    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValidBudget ? (
                <h1>Control de presupuesto</h1>
            ) : (
                <NewBudget 
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}

        </header>
    )
}

export default Header
