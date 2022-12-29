import React from 'react'
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

const Expense = ({expense}) => {

    const { name, quantity, category, date, id } = expense

    return (
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
    )
}

export default Expense
