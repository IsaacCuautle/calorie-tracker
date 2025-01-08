import { useState } from "react"
import { categories } from "../data/categories"

export default function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e) => {
        
        setActivity({
            [e.target.value]: e.target.value
        })
        console.log(e.target.id);
        console.log(e.target.value);
        
    }

    return(
        <form
            className="
                space-y-5
                bg-white shadow
                p-10
                rounded-lg
            "
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
                    ) )}
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
                    value={activity.calories}
                    onChange={ handleChange }
                />
            </div>

            <input 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white" 
                value='Guardar comida o Guardar Ejercicio'
            />

        </form>
    )
}