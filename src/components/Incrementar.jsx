import React from 'react'

export const Incrementar = React.memo(({ incrementar }) => {
    return (
        <button onClick={incrementar} className='btn btn-primary'>+1</button>
    )
})
