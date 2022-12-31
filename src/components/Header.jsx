import DefineBudget from "./DefineBudget";
import BudegetControl from "./BudegetControl";

const Header = ({
    expenses,
    setExpenses,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
    editBudget,
    setEditBudget
}) => {

    return (
        <header>
            <h1>Planificador de gastos</h1>

            {editBudget ? (
                <DefineBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                    editBudget={editBudget}
                    setEditBudget={setEditBudget}
                />
            ) : isValidBudget ? (
                <BudegetControl
                    expenses={expenses}
                    setExpenses={setExpenses}
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                    setEditBudget={setEditBudget}
                />
            ) : (
                <DefineBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}

        </header>
    )
}

export default Header
