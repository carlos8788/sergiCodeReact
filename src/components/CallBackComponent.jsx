import React, { useCallback, useState } from 'react'
import { Incrementar } from './Incrementar'

export const CallBackComponent = () => {
    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback(
        (val) => {
            setCounter(contador => contador + 1)
        }, []
    )

    return (
        <>
            <h1>Counter: {counter}</h1>
            <Incrementar incrementar={incrementarPadre} />
        </>
    )
}
