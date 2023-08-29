// @ts-ignore
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import ContadorComponents from './components/ContadorComponents';
import { FormComponent } from './components/FormComponent';
import { UsuariosComponent } from './components/UsuariosComponent';
import { CalculosPesados } from './components/CalculosPesados';
import { CallBackComponent } from './components/CallBackComponent';

const App = () => {
  return(
    <div className='container my-5'>
      <h1>Apps de hooks</h1>
      <hr />
      <ContadorComponents/>
      <hr />
      <FormComponent/>

      <hr />
      <UsuariosComponent/>

      <hr />
      <CalculosPesados/>

      <hr />
      <CallBackComponent/>
    </div>
  )
}

export default App
