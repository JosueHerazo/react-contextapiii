import { useEffect, useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import { BudgetTracker } from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"


function App() {
// validad si el state tiene mas de 0 es  verdadero
  const { state } = useBudget()

  const isValidBudget = useMemo(() => state.budget > 0,
   [state.budget])

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(state.budget))
    localStorage.setItem("expense", JSON.stringify(state.expenses))
    
  },[state])
  return (
    <>
  
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white ">
          Planificador de gastos
        </h1>
        <img src="i" alt="" />
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10 ">
        {isValidBudget ? <BudgetTracker/> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory/>
          <ExpenseList/>
          <ExpenseModal />
        </main>
      )}
    </>
  )
}

export default App
