// Hooks
import { useState } from 'react'
// Components
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
// Scripts
import { generateId } from './helpers'
// Styles & Assets
import newExpenseIcon from './assets/new_expense.svg'

function App() {

  const [expenses, setExpenses] = useState([])

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 300)
  }

  const saveSpending = expense => {
    expense.id = generateId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])

    setAnimateModal(false)
    setTimeout(() => {
        setModal(false)
      }, 300)
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
                />}

    </div>
  )
}

export default App
