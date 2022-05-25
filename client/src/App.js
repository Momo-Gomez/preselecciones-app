import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//RUTAS

import Home  from './views/Home/home';   //SE IMPORTA HOME.JS DE VISTAS


function App() {
  return (
    <Fragment>
  
      <Router>
        <Routes>

          <Route path= "/" element={<Home />}> </ Route>
          
        </Routes>

      </Router>
      
        
      
    </Fragment>
  );
}

export default App;
