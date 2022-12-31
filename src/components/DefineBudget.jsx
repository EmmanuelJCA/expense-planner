import Swal from "sweetalert2";

const DefineBudget = ({
    budget, 
    setBudget, 
    setIsValidBudget, 
    editBudget,
    setEditBudget
}) => {

    const hanldeBudget = event => {
        event.preventDefault()

        if(!budget || budget < 0){
            return Swal.fire({
                icon: 'error',
                title: 'Presupuesto no valido',
                showConfirmButton: false,
                timer: 2000
              })
        }
        if(editBudget){
            return setEditBudget(false)
        }
        setIsValidBudget(true)
    }

    return (
        <div className="budget-container container shadow">
            <form onSubmit={hanldeBudget} className="form">
                <div className="field">
                    <label htmlFor="">{editBudget ? 'Editar presupuesto' : 'Definir Presupuesto'}</label>
                    <input 
                        className="new-budget"
                        type="number"
                        placeholder="Tu presupuesto aqui"
                        value={budget}
                        onChange={event => setBudget(Number(event.target.value))} 
                    />

                    <input type="submit" value={editBudget ? 'Guardar' : 'Añadir'} />
                </div>
            </form>
        </div>
    )
}

export default DefineBudget