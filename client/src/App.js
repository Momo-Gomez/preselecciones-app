import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router,Routes, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

//LAYOUTS
import Header from "./components/Layouts/Header/header"; //SE IMPORTA EL HEADER FIJO
import Topbar from "./components/Layouts/TopBar/topbar"; //SE IMPORTA LA TOPBAR FIJA

//RUTAS
      //VISTAS
import Home from "./views/Home/home"; //SE IMPORTA HOME.JS
import Signin from "./views/users/signin/signin"; //SE IMPORTA SIGNIN.JS
import Signup from "./views/users/signup/signup"; //SE IMPORTA SIGNUP.JS
import Subsidies from "./views/Subsidios/subsidio"; //SE IMPORTA SUBSIDIO.JS
import Form from "./views/Formulario/form"; //SE IMPORTA FORM.JS
import User from "./views/users/UserView/uv"; //SE IMPORTA UV.JS
import Admin from "./views/Admin/Admin"; // Se IMPORTA ADMIN.JS

function App() {
  const { user } = useContext(Context);
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
            <Route path="/usuario/ingreso" element={user ? < User/> : <Signin />}>
              {" "}
            {/*LLAMANDO A LA RUTA USUARIO/LOGIN DESDE EL SIGNIN.JS */}
            </Route>{" "}
            <Route path="/usuario/registro" element={user ? < User/> : <Signup  />}>
              {" "}
            {/*LLAMANDO A LA RUTA USUARIO/SIGNUP DESDE EL SIGNUP.JS */}
            </Route>
            <Route path="/usuario" element={user ? < User/> : <Signup  />}>
              {" "}
            {/*LLAMANDO A LA RUTA SUSUARIO DESDE EL UV.JS */}
            </Route>{" "}
            <Route path= "/subsidios" element={<Subsidies/>}>
              {" "}
            {/*LLAMANDO A LA RUTA Subsidios/subsidio DESDE EL SUBSIDIO.JS */}
            </Route>{" "}
            <Route path="/usuario/formulario" element={user ? < Form/> : <Signin />}>
              {" "}
            {/*LLAMANDO A LA RUTA SUBSIDIOS/FORMULARIO DESDE EL FORMULARIO.JS */}
            </Route>{" "}
            <Route path="/admin" element={<Admin />}>
              {" "}
            {/*LLAMANDO A LA RUTA ADMIN DESDE EL ADMIN.JS */}
            </Route>{" "}

          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
