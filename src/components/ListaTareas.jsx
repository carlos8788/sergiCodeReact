import React, { useReducer } from 'react'
import {useForm} from '../hooks/useForm'

const initialState = [{
    id: new Date().getTime(),
    tarea: 'Explicar reducer',
    finalizada: false,
}]

const nuevaTarea = {
    id: '2',
    tarea: 'Explicar useReducer',
    finalizada: false,
}

// const agregarTarea = {
//     type: '[TAREAS] Agregar Tarea',
//     payload: nuevaTarea,
// }

const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: nuevaTarea,
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
    payload: nuevaTarea,
}

const borrarTareas = {
    type: '[TAREAS] Borrar Tareas',
    payload: nuevaTarea,
}

const tareaReducer = (state= initialState, action= {}) =>{
    switch(action.type){
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Editar Tarea':
            // return state.map(tarea => tarea.id === action.payload.id? action.payload : tarea)
        case '[TAREAS] Eliminar Tarea':
            // return state.filter(tarea => tarea.id!== action.payload.id)
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            state
    }
}

// console.log(tareaReducer( initialState,agregarTarea))


export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const { tarea, formState, onInputChange} = useForm({tarea: ''})

    const agregarTarea = (event) => {
        event.preventDefault()
        // console.log(tarea)
        console.log(formState)
        
        if(formState.tarea === '') return

        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false,
        }

        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)

    }
    return (
        <>
        <form onSubmit={agregarTarea}>
            <div className="form-group">
                <input 
                type="text" 
                className='form-control'
                name='tarea'
                placeholder='Ingresá tarea'
                value={tarea}
                onChange={onInputChange}
                />

            </div>
            <button type='submit' className='btn btn-primary'> Sumbmit </button>
        </form>
        
        <ul>
            {state.map(item => {
                return (
                    <li key={item.id}>
                        {item.tarea}
                    </li>
                )
            })}
        </ul>
        </>
        
    )
}
