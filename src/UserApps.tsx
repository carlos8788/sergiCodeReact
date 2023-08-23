import React, { useEffect, useState } from 'react'
import { UserList } from './components/UserList'
const UserApps = () => {
    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => (endPoint === 'users') ? setEndPoint('comments') : setEndPoint('users')

    return (
        <>
            <h1>Lista</h1>
            <button onClick={handleFetch}> Aquí se llama a la API </button>
            <UserList endPoint={endPoint} />
        </>
    )
}

export default UserApps