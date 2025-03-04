import { createContext, Dispatch, ReactNode, useReducer, useMemo } from "react";

import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activityReducer";
import { Activity } from "../types";
import { categories } from "../data/categories";

type ActivityPorviderProps = 
{

    children : ReactNode

}

type ActivityContextProps = 
{

    state : ActivityState,
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed : number,
    caloriesBurned : number,
    netCalories : number,
    categoryName : ( category : Activity["category"] ) => string[],
    isEmptyActivities: boolean

}

export const ActivityContext = createContext<ActivityContextProps>( null! )

export const ActivityPorvider = ( { children } : ActivityPorviderProps ) => {

    const [ state, dispatch ] = useReducer( activityReducer, initialState )

    // Calorias consumidas 
    const caloriesConsumed = useMemo( () => state.activities.reduce( (total, activity) => activity.category === 1 ? total + activity.calories : total, 0 ) , [state.activities] );
    
    // Calorias quemadas 
    const caloriesBurned = useMemo( () => state.activities.reduce( (total, activity) => activity.category === 2 ? total + activity.calories : total, 0 ) , [state.activities] );
    
    // Calorias totales 
    const netCalories = useMemo( () => caloriesConsumed - caloriesBurned  , [ state.activities ] );

    const categoryName = useMemo( 
        () => ( category : Activity['category'] ) => 
            categories.map( 
                ( cat ) => cat.id === category ? cat.name : ''
            ), [ state.activities ] 
    )
    
    const isEmptyActivities = useMemo( 
        () => state.activities.length === 0, [ state.activities ] 
    )

    return (
        <ActivityContext.Provider value={ 
            { 
                state,
                dispatch,
                caloriesConsumed,
                caloriesBurned,
                netCalories,
                categoryName,
                isEmptyActivities
            } 
        }>
            {children}
        </ActivityContext.Provider>
    )

}