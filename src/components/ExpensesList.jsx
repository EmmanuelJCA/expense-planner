import { useState } from "react"
import Expense from "./Expense"

const ExpensesList = ({expenses}) => {
    return (
        <div className='expenses-list container'>
            <h2>{expenses.length ? 'Gastos' : 'No hay Gastos'}</h2>

            {expenses.map( expense => (
                <Expense 
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    )
}

export default ExpensesList
