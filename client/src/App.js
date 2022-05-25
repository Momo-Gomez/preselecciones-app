import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//LAYOUTS
import Header from './components/Layouts/Header/header'   //SE IMPORTA EL HEADER FIJO
import Topbar from './components/Layouts/TopBar/topbar'   //SE IMPORTA LA TOPBAR FIJA

//RUTAS

import Home  from './views/Home/home';   //SE IMPORTA HOME.JS DE VISTAS


function App() {
  return (
    <Fragment>
      <Router>
        <Topbar />
        <Routes>

          <Route path= "/" element={<Home />}> </ Route>        {/* LLAMANDO A LA RUTA / DESDE EL HOME.JS */}
          

        </Routes>

      </Router>
      
        
      
    </Fragment>
  );
}

export default App;
