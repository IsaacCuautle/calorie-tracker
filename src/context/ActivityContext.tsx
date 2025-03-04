import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ActivityActions, activityReducer, ActivityState, initialState } from "../reducers/activityReducer";


type ActivityPorviderProps = 
{

    children : ReactNode

}

type ActivityContextProps = 
{

    state : ActivityState,
    dispatch: Dispatch<ActivityActions>

}

export const ActivityContext = createContext<ActivityContextProps>( null! )

export const ActivityPorvider = ( { children } : ActivityPorviderProps ) => {

    const [ state, dispatch ] = useReducer( activityReducer, initialState )

    return (
        <ActivityContext.Provider value={ { state, dispatch } }>
            {children}
        </ActivityContext.Provider>
    )

}