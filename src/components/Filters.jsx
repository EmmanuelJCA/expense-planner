const Filters = ({filter, setFilter}) => {
    return (
        <div className="filters shadow container">
            <form action="">
                <div className="field">
                    <label htmlFor="filters">Filtrar Gastos</label>
                    <select 
                        id="filters"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">Todos los gastos</option>
                        <option value="ahorros">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters
