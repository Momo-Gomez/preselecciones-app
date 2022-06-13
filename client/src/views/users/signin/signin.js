/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import "./signin.css";
import React from "react";

const signin = () => {
  return <p> asda</p>;
};

export default function Login() {
  return (
    <div className="container">
      <div className="signin">
        {/* Tarjeta  */}
        <div className="card mt-3">
          <span className="signin-title text-center">Ingreso</span>
          <form className="signin-form">
            <label>RUT</label>
            <input type="text" className="form-control" placeholder="RUT" />

            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </form>
          <div className="text-left">
            <button
              type="submit"
              className="sign-button btn btn-primary
                                            border border-white border-opacity-25
                                            btn-gorup
                                            mt-4 me-4
                                            shadow rounded-pill"
            >
              {" "}
              {/*Parámetros de diseño en bootstrap para el boton */}
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
