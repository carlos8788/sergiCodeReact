import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

export const Contact = () => {
  const { usuario } = useContext( UsuarioContext )
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Tecnologia</th>
          <th scope="col">Email</th>
          <th scope="col">Redes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th >{usuario.nombre}</th>
          <td>{usuario.tecnologia}</td>
          <td>{usuario.mail}</td>
          <td>{usuario.redes}</td>
        </tr>
      </tbody>
    </table>
  )
}
