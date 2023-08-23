// @ts-ignore
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import UseStateApp from './components/useState.jsx'
import { ListadoCurso } from './components/lista.jsx';
import UserApps from './UserApps';

const App = () => {
  return(
    <div className='container my-5'>
      {/* <UseStateApp/> */}
      {/* <ListadoCurso/> */}
      <UserApps/>
    </div>
  )
}

export default App
