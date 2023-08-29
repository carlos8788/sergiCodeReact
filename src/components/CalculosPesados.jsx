import { useMemo, useState } from "react"



export const CalculosPesados = () => {
    const [listaNumber, setListaNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [show, setShow] = useState(true)

    const agregarNumbers = () => {
        setListaNumber([...listaNumber, listaNumber[listaNumber.length - 1] + 1])
        console.log(listaNumber);
    }

    const getCalculo = (listaNumber) => useMemo(()=> {
        console.log('calculando');
        return listaNumber.reduce((a, b) => a * b * b)
    }, [listaNumber])

    return (
        <>
            <div>Calculos Pesados</div>
            <p>{getCalculo(listaNumber)}</p>
            <button className="btn btn-primary me-2" onClick={()=> setShow(!show)} >{show ? 'Show' : 'Hide'}</button>
            <button className="btn btn-info ms-2" onClick={agregarNumbers} >agregar numero</button>
        </>
    )
}
