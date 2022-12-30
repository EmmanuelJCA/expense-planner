import { useState } from "react"
import Expense from "./Expense"

const ExpensesList = ({
    expenses, 
    setExpenseEdit, 
    deleteExpense,
    filter,
    filteredExpenses
}) => {
    return (
        <div className='expenses-list container'>
            {
                filter ? (
                    <>
                        <h2>{filteredExpenses.length ? 'Gastos' : 'No hay Gastos en esta categoria'}</h2>
                        {filteredExpenses.map( expense => (
                            <Expense 
                                key={expense.id}
                                expense={expense}
                                setExpenseEdit={setExpenseEdit}
                                deleteExpense={deleteExpense}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{expenses.length ? 'Gastos' : 'No hay Gastos'}</h2>
                        {expenses.map( expense => (
                            <Expense 
                                key={expense.id}
                                expense={expense}
                                setExpenseEdit={setExpenseEdit}
                                deleteExpense={deleteExpense}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default ExpensesList
