import { useState } from "react";
import NewBudget from "./NewBudget";
import BudegetControl from "./BudegetControl";

const Header = ({
    expenses,
    setExpenses,
    budget, 
    setBudget, 
    isValidBudget, 
    setIsValidBudget
}) => {

    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValidBudget ? (
                <BudegetControl
                    expenses={expenses} 
                    setExpenses={setExpenses}
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
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
