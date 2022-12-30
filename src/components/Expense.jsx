import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatDate } from '../helpers'

import savingIcon from '../assets/icon_saving.svg'
import houseIcon from '../assets/icon_house.svg'
import foodIcon from '../assets/icon_food.svg'
import expensesIcon from '../assets/icon_expenses.svg'
import leisureIcon from '../assets/icon_leisure.svg'
import healthIcon from '../assets/icon_health.svg'
import suscriptionIcon from '../assets/icon_suscription.svg'

const iconsDictionary = {
    ahorros : savingIcon,
    comida : foodIcon,
    hogar : houseIcon,
    gastos : expensesIcon,
    ocio : leisureIcon,
    salud : healthIcon,
    suscripciones : suscriptionIcon
}

const Expense = ({expense, setExpenseEdit, deleteExpense}) => {

    const { name, quantity, category, date, id } = expense

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setExpenseEdit(expense)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => deleteExpense(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='expense shadow'>
                    <div className='expense-content'>
                        <img 
                            src={iconsDictionary[category]}
                            alt="Icono gasto"
                        
                        />
                        <div className='expense-description'>
                            <p className='category'>{category}</p>
                            <p className='expense-name'>{name}</p>
                            <p className='expense-date'>
                                Agregado el: {''}
                                <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='expense-quantity'>${quantity}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>

    )
}

export default Expense
