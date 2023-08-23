import React, { useEffect, useState } from 'react'


const UserList = ({ endPoint }) => {
    const [data, setData] = useState([])

    const fetchdata = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json()
            setData(data)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchdata()
    }, [endPoint])
    return (
        <>
            <ul>
                {data.map(dat => <li key={dat.id}> {(endPoint === 'users') ? dat.name : dat.body } </li>)}
            </ul>
        </>
    )
}

const UserApps = () => {
    const [endPoint, setEndPoint ] = useState('users')

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