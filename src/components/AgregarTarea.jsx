import React, { useState } from 'react'

const AgregarTarea = ({agregarTask}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => setInputValue(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTask(inputValue)
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Agregar Tarea'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AgregarTarea