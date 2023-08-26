import { useState } from "react"

const getCalculo = (listaNumber) => {
    console.log('calculando');
    return listaNumber.reduce((a, b) => a * b * b)
}

export const CalculosPesados = () => {
    const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [show, setShow] = useState(true)

    return (
        <>
            <div>CalculosPesados</div>
            <p>{getCalculo(listaNumeros)}</p>
            <button className="btn btn-primary" onClick={()=> setShow(!show)} >{show ? 'Show' : 'Hide'}</button>
        </>
    )
}
