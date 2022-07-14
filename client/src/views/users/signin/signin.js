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
        <div className="signin-card card mt-3">
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
            <div className="signin-btn">
              <a href="#" className="btn btn-primary">Ingresar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
