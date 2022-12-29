import { useState } from "react"
import Message from "./Message"
import closeModalBtn from '../assets/close.svg'

const Modal = ({setModal, animateModal, setAnimateModal, saveSpending}) => {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState('')

    const hideModal = () => {
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
          }, 300)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([ name, quantity, category ].includes('')) {
            setMessage('Todos los campos son obligatorios')

            setTimeout(() => {
                setMessage('')
            }, 2000)
            return
        } 

        saveSpending({name, quantity, category})
        console.log("Enviando Form")
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

                <legend>Nuevo Gasto</legend>

                {message && <Message type="error">{message}</Message>}

                <div className="field">
                    <label htmlFor="name">Nombre Gasto</label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Nombre del gasto aqui"
                        value={name}
                        onChange={ e => setName(e.target.value)}
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
                    value="Anadir Gasto"
                />
            </form>
        </div>
    )
}

export default Modal
