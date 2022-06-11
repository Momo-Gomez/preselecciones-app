/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import './signin.css';
import React from 'react';

const signin = () => {
  return <p> asda</p>;
};

export default function Login() {
  return (
    <div className="container">
      <div className="signin">
        <div className="card mb-5">
          <span className="signin-title">Ingreso</span>
          <form className="signin-form">
            <label>RUT</label>
            <input type="text" placeholder="RUT" />

            <label>Contraseña</label>
            <input type="text" placeholder="Contraseña" />
          </form>
          <button className="sign-button">Ingresar</button>
        </div>
      </div>
    </div>
  );
}
