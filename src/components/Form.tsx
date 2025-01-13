import { useState, ChangeEvent, FormEvent, Dispatch } from "react"
import { v4 as uuidv4 } from "uuid"

import { categories } from "../data/categories"
import { Activity } from "../types"
import { ActivityActions } from "../reducers/activityReducer"

type FormProps = {
    dispatch : Dispatch<ActivityActions>
}

const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export default function Form({dispatch} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState);

    const handleChange = ( e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> ) => {
        
        const isNumberField = ['category','calories'].includes(e.target.id);

        setActivity({
        
            ...activity,

            // Comprueba si es un campo numerico y lo parsea
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        
        });
        
    }

    // Verifica que se llenen todos los campos
    const isValidActivity = () => {
        
        const { name, calories } = activity;
        console.log( name.trim() !== '' && calories > 0 );
        return name.trim() !== '' && calories > 0;
    
    }

    //* Guarda el formulario
    const handleSubmit = ( e : FormEvent<HTMLElement> ) => {
        
        e.preventDefault();
        
        dispatch({type: 'save activity' , payload : {newActivity: activity}});

        setActivity({
            ...initialState,
            id: uuidv4()
        });
    }

    return(
        <form
            className="
                space-y-5
                bg-white shadow
                p-10
                rounded-lg
            "
            onSubmit = { handleSubmit }
        >
            {/* Categorias */}
            <div
                className="
                    grid grid-cols-1 
                    gap-3
                "
            >
                <label htmlFor="category">Categoria: </label>
                <select 
                    name="" 
                    id="category"
                    className="
                        font-bold
                        border border-slate-300 
                        p-2
                        rounded-lg
                        bg-white
                    "
                    value={activity.category}
                    onChange={ handleChange }
                >
                    {categories.map( category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Actividades */}
            <div
                className="
                    grid grid-cols-1 
                    gap-3
                "
            >
                <label htmlFor="name">Actividad: </label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida, Jugo de naranja, Ensalada, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={ handleChange }
                />
            </div>

            {/* Calorias */}
            <div
                className="
                    grid grid-cols-1 
                    gap-3
                "
            >
                <label htmlFor="calories">Calorias: </label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. 300 o 500"
                    min={0}
                    value={activity.calories}
                    onChange={ handleChange }
                    
                    
                />
            </div>

            <input 
                type="submit" 
                className="
                    bg-gray-800
                    hover:bg-gray-900
                    w-full p-2
                    font-bold
                    uppercase 
                    text-white
                    disabled:opacity-50 
                    disabled:cursor-not-allowed
                    cursor-pointer

                " 
                value={ activity.category === 1 ? ' Guardar Comida' : 'Guardar Ejercicio'}
                disabled = { !isValidActivity() }
            />

        </form>
    )
}