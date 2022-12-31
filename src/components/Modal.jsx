import { useState, useEffect } from "react"
import Swal from 'sweetalert2'
import closeModalBtn from '../assets/close.svg'

const Modal = ({
    setModal,
    animateModal,
    setAnimateModal,
    saveSpending,
    expenseEdit,
    setExpenseEdit
}) => {

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(expenseEdit).length > 0) {
            setName(expenseEdit.name)
            setQuantity(expenseEdit.quantity)
            setCategory(expenseEdit.category)
            setId(expenseEdit.id)
            setDate(expenseEdit.date)
        }
    }, [])

    const hideModal = () => {
        setAnimateModal(false)
        setExpenseEdit({})

        setTimeout(() => {
            setModal(false)
        }, 300)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if ([name, quantity, category].includes('')) {
            return Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
                showConfirmButton: false,
                timer: 2000
            })
        }

        if(quantity <= 0) {
            return Swal.fire({
                icon: 'error',
                title: 'El monto debe ser mayor que 0',
                showConfirmButton: false,
                timer: 2000
            })
        }

        saveSpending({ name, quantity, category, id, date })
    }

    return (
        <div className="modal">
            <div className="close-modal">
                <img
                    src={closeModalBtn}
                    alt="Cerrar modal"
                    onClick={hideModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`form ${animateModal ? "animate" : "close"}`}
            >

                <legend>{expenseEdit.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

                <div className="field">
                    <label htmlFor="name">Nombre Gasto</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Nombre del gasto aqui"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="quantity">Cantidad</label>
                    <input
                        id="quantity"
                        type="number"
                        placeholder="Monto del gasto aqui"
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                </div>

                <div className="field">
                    <label htmlFor="category">Categoria</label>
                    <select
                        id="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorros">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value={expenseEdit.name ? 'Guardar Cambios' : 'Anadir Gasto'}
                />
            </form>
        </div>
    )
}

export default Modal
