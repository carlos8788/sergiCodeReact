import React, { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'

// const usuario = {
//     nombre: 'Luis',
//     tecnologia: 'React',
//     mail: 'luis@gmail.com',
//     redes: '@Luis'
// }

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState({})
  return (
    <UsuarioContext.Provider value={{usuario, setUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
