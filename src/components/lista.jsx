import { useState } from "react";
import AgregarTarea from "./AgregarTarea";

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

    const addTasks = () => setLista([...lista, { nombre: 'nueva tarea', visto: true }])

    const onAgregarTask = (valor) => {
        const valorCheck = valor.trim()
        if(valorCheck < 1) return
        const task = {
            nombre: valorCheck,
            visto: false
        }
        setLista([...lista, task])
    }

    return (
        <>
            <h1>Listado de temas del Curso</h1>
            <AgregarTarea agregarTask={onAgregarTask}/>
            <ol>
                {lista.map((item, i) => <Items key={i} visto={item.visto} nombre={item.nombre} />)}
            </ol>
            {/* <button onClick={addTasks}>Agregar tarea</button> */}
        </>
    )
}
