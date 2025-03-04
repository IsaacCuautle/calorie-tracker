import { useEffect, useMemo } from "react";

import Form from "./components/Form";
import CalorieTracker from "./components/CalorieTracker";
import ActivityList from "./components/ActivityList";
import { useActivity } from "./hooks/useActivity";


function App() {

  const { state, dispatch } = useActivity()
  
  useEffect( () => {
    
    // Crea un archivo para las actividades en el almacenamiento local
    localStorage.setItem('activities', JSON.stringify(state.activities));

  }, [state.activities]);

  const canRestartApp = () => useMemo( () => state.activities.length, [state.activities])

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 
          className="
            text-center 
            text-lg
            font-bold
            text-white
            uppercase"
          >
            Contador de calorias
          </h1>

          <button 
            className="
              bg-gray-800
              hover:bg-gray-900
              font-bold 
              p-2
              uppercase
              text-white
              cursor-pointer
              rounded-lg
              text-sm
              disabled:opacity-60
              disabled:cursor-not-allowed"
            onClick={ () => dispatch( {type:'reset-app'} ) }
            disabled={ !canRestartApp() }
          >
            Reiniciar app
          </button>

        </div>
      </header>

      <section className="
        bg-lime-500
        py-20
        px-5
      ">
        
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      
      </section>

      <section className="bg-gray-800 p-10">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker />
        </div>
      </section>

      <section
        className="
          p-10
          mx-auto
          max-w-4xl
        "
      >
        <ActivityList />
      </section>
    </>
  )
}

export default App
