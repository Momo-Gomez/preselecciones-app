import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//RUTAS

import Home  from '../views/Home/home';   //SE IMPORTA HOME.JS DE VISTAS
import userSignin from '../views/users/signin/signin'

function App() {
  return (
    <Fragment>
      <Router>

      <Route path= "/" element={<Home />}> </ Route>
      <Route path= "/user" element = {<userSignin/>}> </ Route>

      </Router>
      
        
      
    </Fragment>
  );
}

export default App;
