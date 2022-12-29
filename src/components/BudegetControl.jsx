import { useState } from "react"

const BudegetControl = ({budget}) => {

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
                    <span>Disponible: </span> {formatQuantity(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatQuantity(0)}
                </p>
            </div>
        </div>
    )
}

export default BudegetControl
