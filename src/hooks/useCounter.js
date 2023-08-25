import React, { useState } from 'react'


export const useCounter = (valorInicial = 0) => {
    const [contador, setContador] = useState(valorInicial)

    const incrementar = (valor = 1) => setContador(contador + valor)

    const decrementar = (valor = 1) => setContador(contador - valor)

    const reset = () => setContador(0)

    

    return {
        contador,
        incrementar,
        decrementar,
        reset
    }
}

