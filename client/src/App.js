import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//LAYOUTS
import Header from "./components/Layouts/Header/header"; //SE IMPORTA EL HEADER FIJO
import Topbar from "./components/Layouts/TopBar/topbar"; //SE IMPORTA LA TOPBAR FIJA

//RUTAS
      //VISTAS
import Home from "./views/Home/home"; //SE IMPORTA HOME.JS
import Signin from "./views/users/signin/signin"; //SE IMPORTA SIGNIN.JS
import Signup from "./views/users/signup/signup"; //SE IMPORTA SIGNUP.JS
import Subsidio from "./views/Subsidios/subsidio"; //SE IMPORTA HOME.JS
import DS27 from "./views/Subsidios/DS27/DS27"; //SE IMPORTA DS27.JS

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
            <Route path="/usuario/ingreso" element={<Signin />}>
              {" "}
            {/*LLAMANDO A LA RUTA USUARIO/LOGIN DESDE EL SIGNIN.JS */}
            </Route>{" "}
            <Route path="/usuario/registro" element={<Signup />}>
              {" "}
            {/*LLAMANDO A LA RUTA USUARIO/SIGNUP DESDE EL SIGNIN.JS */}
            </Route>
            <Route path= "/subsidios" element={<Subsidio />}>
              {" "}
            {/*LLAMANDO A LA RUTA Subsidios/subsidio DESDE EL HOME.JS */}
            </Route>{" "}
            <Route path= "/subsidios/DS27" element={<DS27 />}>
              {" "}
            {/*LLAMANDO A LA RUTA Subsidios/DS-27/DS-27 DESDE EL HOME.JS */}
            </Route>{" "}
            
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
