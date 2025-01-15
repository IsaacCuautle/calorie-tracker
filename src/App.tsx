import { useReducer, useEffect, useMemo } from "react";

import Form from "./components/Form";
import { activityReducer, initialState } from "./reducers/activityReducer";
import ActivityList from "./components/ActivityList";

function App() {


  const [ state, dispatch ] = useReducer( activityReducer, initialState);
  
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
          <Form
            dispatch = { dispatch }
            state= { state }
          />
        </div>
      </section>

      <section
        className="
          p-10
          mx-auto
          max-w-4xl
        "
      >
        <ActivityList
          dispatch = { dispatch }
          activities = { state.activities }
        />
      </section>
    </>
  )
}

export default App
