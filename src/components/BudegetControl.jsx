import { useState, useEffect } from "react"
import { formatQuantity } from "../helpers"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import Swal from "sweetalert2"

const BudegetControl = ({
    expenses, 
    setExpenses,
    budget,
    setBudget,
    setIsValidBudget,
    setEditBudget
}) => {

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

    const handleResetApp = async () => {
        const result = await Swal.fire({
            title: 'Deseas reiniciar presupuesto y gastos?',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
        })
        if (result.isConfirmed) {
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }

    const handleEditBudget = () => {
        setEditBudget(true)
    }
    return (
        <div className="budget-container container shadow two-columns">
            
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: porcentage > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentage > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={porcentage}
                    text={`${porcentage}% Gastado`}
                
                />
            </div>

            <div className="content-budget">
                <button
                    className="btn reset-app"
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <button
                    className="btn edit-budget"
                    onClick={handleEditBudget}
                >
                    Editar Presupuesto
                </button>
                <p>
                    <span>Presupuesto: </span> {formatQuantity(budget)}
                </p>
                <p className={`${available < 0 ? 'negative' : ''}`}>
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
