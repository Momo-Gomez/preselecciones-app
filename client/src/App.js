import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//LAYOUTS
import Header from "./components/Layouts/Header/header"; //SE IMPORTA EL HEADER FIJO
import Topbar from "./components/Layouts/TopBar/topbar"; //SE IMPORTA LA TOPBAR FIJA

//RUTAS

import Home from "./views/Home/home"; //SE IMPORTA HOME.JS DE VISTAS
import Signin from "./views/users/signin/signin"; //SE IMPORTA SIGNIN.JS DE VISTAS
import Subsidio from "./views/Subsidios/subsidio"; //SE IMPORTA HOME.JS DE

function App() {
  return (
    <Fragment>
      <div className="container">
        <Router>
          <div>
            <Topbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
            </Route>{" "}
            {/* LLAMANDO A LA RUTA / DESDE EL HOME.JS */}
            <Route path="/usuario/login" element={<Signin />}>
              {" "}
            {/*LLAMANDO A LA RUTA USUARIO/LOGIN DESDE EL SIGNIN.JS */}
            </Route>{" "}
            <Route path= "/subsidio" element={<Subsidio />}>
              {" "}
            {/*LLAMANDO A LA RUTA Subsidios/subsidio DESDE EL HOME.JS */}
            </Route>{" "}
            
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
