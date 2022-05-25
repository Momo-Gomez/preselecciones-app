import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//LAYOUTS
import Header from './components/Layouts/Header/header'   //SE IMPORTA EL HEADER FIJO
import Topbar from './components/Layouts/TopBar/topbar'   //SE IMPORTA LA TOPBAR FIJA

//RUTAS

import Home  from './views/Home/home';   //SE IMPORTA HOME.JS DE VISTAS
import Signin from './views/users/signin/signin' //SE IMPORTA SIGNIN.JS DE VISTAS


function App() {
  return (
    <Fragment>
      <div className='container'>
        <Router>
          <div className='mb-3'>
            <Topbar />
          </div>
          
          <Routes>

            <Route path= "/" element={<Home />}> </ Route>        {/* LLAMANDO A LA RUTA / DESDE EL HOME.JS */}
            <Route path= "/usuario/login" element = { <Signin /> }> </Route>    {/*LLAMANDO A LA RUTA USUARIO/LOGIN DESDE EL SIGNIN */}
            

          </Routes>

        </Router>
      </div>
      
      
        
      
    </Fragment>
  );
}

export default App;
