import React, { useReducer } from 'react'
import { useForm } from '../hooks/useForm'

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




const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar Tarea':
            console.log(state);
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada,
                    }
                }
                return tarea
            })
        case '[TAREAS] Eliminar Tarea':
            return state.filter(tarea => tarea.id !== action.payload)
        case '[TAREAS] Borrar Tareas':
            return []
        default:
            state
    }
}

// console.log(tareaReducer( initialState,agregarTarea))


export const ListaTareas = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState)

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (event) => {
        event.preventDefault()
        // console.log(tarea)
        // console.log(formState)

        if (formState.tarea === '') return

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

    const finalizarTarea = ({ id }) => {

        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const eliminarTarea = ({ id }) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id,
        }
        dispatch(action)
    }

    const borrarTareas = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
            payload: ''
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
                <button type='submit' className='btn btn-primary my-2'> Sumbmit </button>
                <button type='button' className='btn btn-danger ms-4 my-2' onClick={borrarTareas} > Reset </button>
            </form>

            <ul className='list-group'>
                {state.map(item => {
                    return (
                        <li key={item.id} className='list-group-item d-flex justify-content-between'>
                            <span className='bg-white text-dark'>{item.tarea}</span>
                            <div className='bg-light d-flex gap-2'>
                                <input

                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button
                                    className='btn btn-danger'
                                    onClick={() => eliminarTarea(item)}
                                >
                                    🚮
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>

    )
}
