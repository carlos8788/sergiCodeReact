import { useFetchData } from "../hooks/useFetchData";

export const UserList = ({ endPoint }) => {
    const { data, isLoading } = useFetchData(endPoint)
    console.log(data);
    
    return (
        <>
            <ul>
                {isLoading
                    ? <p>Cargando...</p>
                    : data.map(dat => <li key={dat.id}> {(endPoint === 'users') ? dat.name : dat.body} </li>)
                }
            </ul>
        </>
    )
}
