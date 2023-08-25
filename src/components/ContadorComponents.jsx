import React from 'react'
import { useCounter } from '../hooks/useCounter'

const ContadorComponents = () => {

    const {
        contador,
        incrementar,
        decrementar,
        reset
    } = useCounter(0)

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button className='mx-4 btn btn-primary' onClick={() => incrementar()}>+1</button>
            <button className='mx-4 btn btn-danger' onClick={() => reset()}>reset</button>
            <button className='mx-4 btn btn-primary' onClick={() => decrementar()}>-1</button>

        </>
    )
}

export default ContadorComponents