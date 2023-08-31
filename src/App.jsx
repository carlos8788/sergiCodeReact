// @ts-ignore
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'

import { NavBar } from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { UsuarioProvider } from './context/UsuarioProvider';
import { Login } from './routes/Login';


const App = () => {
  return (
    <UsuarioProvider>
      <div className='container my-5'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </UsuarioProvider>
  )
}

export default App
