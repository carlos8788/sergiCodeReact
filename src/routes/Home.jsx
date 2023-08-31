
import ContadorComponents from '../components/ContadorComponents';
import { FormComponent } from '../components/FormComponent';
import { UsuariosComponent } from '../components/UsuariosComponent';
import { CalculosPesados } from '../components/CalculosPesados';
import { CallBackComponent } from '../components/CallBackComponent';
import { ListaTareas } from '../components/ListaTareas';
export const Home = () => {
    return (
        <>
            <h1>Apps de hooks</h1>
            <hr />
            <ContadorComponents />
            <hr />
            <FormComponent />

            <hr />
            <UsuariosComponent />

            <hr />
            <CalculosPesados />

            <hr />
            <CallBackComponent />

            <hr />
            <ListaTareas />
        </>
    )
}
