import { useState, useEffect } from 'react'

function UseStateApp() {
  const [contador, setContador] = useState(0)

  const sumar = () => setContador(contador+1)

  return (
    <div className='container'>
      <h1 >{contador}</h1>
      <button className='btn btn-success' onClick={sumar}>Sumar 1</button>
    </div>
  )
}

export default UseStateApp