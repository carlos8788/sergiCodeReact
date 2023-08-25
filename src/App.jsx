// @ts-ignore
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import ContadorComponents from './components/ContadorComponents';
import { FormComponent } from './components/FormComponent';

const App = () => {
  return(
    <div className='container my-5'>
      <h1>Apps de hooks</h1>
      <hr />
      <ContadorComponents/>
      <hr />
      <FormComponent/>


    </div>
  )
}

export default App
