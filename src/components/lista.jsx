import { useState } from "react";

const listaTemas = [
    { nombre: 'Instalaciones', visto: true },
    { nombre: 'Que es Vite', visto: true },
    { nombre: 'Componentes', visto: true },
    { nombre: 'Variables en JSX', visto: true },
    { nombre: 'Props', visto: true },
    { nombre: 'Eventos', visto: true },
    { nombre: 'useState', visto: true },
    { nombre: 'redux', visto: false },
    { nombre: 'customHooks', visto: false }
]


const Items = ({ nombre, visto, index }) => {

    const estilo = visto ? 'text-success' : 'text-danger';
    return (
        <li key={index} className={estilo}>{nombre}</li>
    )
}

export const ListadoCurso = () => {
    const [lista, setLista] = useState(listaTemas)

    return (
        <>
            <h1>Listado de temas del Curso</h1>
            <ol>
                {lista.map( (item, i) => <Items key={i} visto={item.visto} nombre={item.nombre}/>)}
            </ol>
        </>
    )
}
