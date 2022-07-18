/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import "./signin.css";
import React from "react";
import { useNavigate } from "react-router-dom";


const signin = () => {
  return <p> asda</p>;
};

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="s-container">
      <div className="signin">
      <h1 class="text-center p-5"></h1>
        {/* Tarjeta  */}
        <div className="signin-card card mt-3">
          <span className="signin-title text-center">Ingreso</span>
          <form className="signin-form">

            <div class="input-group">
              <input 
                type="text" 
                className="signin-input" 
                placeholder="Ej. 123456789"
                autoComplete="off"
                id="rut"
              />
              <label class="label">RUT</label>
            </div>


            <div class="input-group">
              <input
                type="password"
                className="signin-input"
                placeholder="Contraseña"
                autoComplete="off"
                id="contraseña"
              />
              <label class="label">Contraseña</label>
            </div>

          </form>
          <div className="text-left">
            <div className="signin-btn">
              <a onClick={() => navigate('/usuario')} href="#" className="btn btn-primary">Ingresar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
