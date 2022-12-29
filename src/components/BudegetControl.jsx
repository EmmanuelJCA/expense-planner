import { useState, useEffect } from "react"

const BudegetControl = ({expenses, budget}) => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, spent) => spent.quantity + total, 0)
        const totalAvailable = budget - totalSpent

        setSpent(totalSpent)
        setAvailable(totalAvailable)
    }, [expenses])

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    return (
        <div className="budget-container container shadow two-columns">
            <p>Grafica aqui</p>

            <div className="content-budget">
                <p>
                    <span>Presupuesto: </span> {formatQuantity(budget)}
                </p>
                <p>
                    <span>Disponible: </span> {formatQuantity(available)}
                </p>
                <p>
                    <span>Gastado: </span> {formatQuantity(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudegetControl
