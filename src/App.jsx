// Hooks
import { useEffect, useState } from 'react'
// Components
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
// Scripts
import { generateId } from './helpers'
// Styles & Assets
import newExpenseIcon from './assets/new_expense.svg'

function App() {

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
    )

  const [budget, setBudget] = useState( Number(localStorage.getItem('budget') ?? 0) )
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 300)
    }
  }, [expenseEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  },[budget])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0

    if(budgetLS > 0 ) {
      setIsValidBudget(true)
    }
  })

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  },[expenses])

  const handleNewExpense = () => {
    setModal(true)
    setExpenseEdit({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 300)
  }

  const saveSpending = expense => {

    if(expense.id) {
      const updatedExpenses = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState)

      setExpenses(updatedExpenses)
      setExpenseEdit({})
    } else {
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }

    setAnimateModal(false)
    setTimeout(() => {
        setModal(false)
      }, 300)
  }

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter( expense => expense.id !== id )

    setExpenses(updatedExpenses)
  }

  return (
    <div className={modal ? 'fix' : ''}>
      <Header 
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList 
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className='new-expense'>
            <img 
              src={newExpenseIcon} 
              alt="Icono nuevo gasto"
              onClick={handleNewExpense} 
            />
          </div>
        </>
      )}

      {modal && <Modal 
                  setModal={setModal}
                  animateModal={animateModal}
                  setAnimateModal={setAnimateModal}
                  saveSpending={saveSpending}
                  expenseEdit={expenseEdit}
                  setExpenseEdit={setExpenseEdit}
                />}

    </div>
  )
}

export default App
