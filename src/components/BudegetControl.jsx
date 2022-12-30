import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

const BudegetControl = ({expenses, budget}) => {

    const [porcentage, setPorcentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const totalSpent = expenses.reduce((total, spent) => spent.quantity + total, 0)
        const totalAvailable = budget - totalSpent

        // Calcular el porcentaje gastado
        const newPorcentage = (((budget - totalAvailable) / budget) * 100).toFixed(2)

        setSpent(totalSpent)
        setAvailable(totalAvailable)
        setTimeout(() => {
            setPorcentage(newPorcentage)
        }, 700)
    }, [expenses])

    const formatQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
    return (
        <div className="budget-container container shadow two-columns">
            
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82F6'
                    })}
                    value={porcentage}
                    text={`${porcentage}% Gastado`}
                
                />
            </div>

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
