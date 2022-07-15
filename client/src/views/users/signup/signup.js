import "./signup.css";
import React, { Component } from 'react';

export default function signup() {
  return (
    <div className="container">
      <div className="signup">
        <h1 class="text-center p-5"></h1>
        {/*  Tarjeta  */}
        <div className="signup-card card mt-3">
          <span className="signup-title text-center">Registro</span>
          <form className="signup-form">
            {/* Información solicitada al cliente */}

            {/*--- RUT ---*/}
            <label>RUT</label>
            <input
              type="text" pattern="[k0-9]*"
              className="signup-input form-control"
              placeholder="123456789"
            />

            {/*--- PRIMER NOMBRE ---*/}
            <label>Primer Nombre</label>
            <input
              type="text" pattern="[A-Za-z]*"
              className="signup-input form-control"
              placeholder="Alex"
            />

            {/*--- SEGUNDO NOMBRE ---*/}
            <label>Segundo Nombre</label>
            <input 
              id="s-name"
              type="text" pattern="[A-Za-z]*"
              className="signup-input form-control"
              placeholder="Cruz"
            />

            {/*--- APELLIDO PATERNO ---*/}
            <label>Apellido Paterno</label>
            <input
              type="text" pattern="[A-Za-z]*"
              className="signup-input form-control"
              placeholder="Pérez"
            />

            {/*--- APELLIDO MATERNO ---*/}
            <label>Apellido Materno</label>
            <input
              type="text" pattern="[A-Za-z]*"
              className="signup-input form-control"
              placeholder="Pérez"
            />

            {/*--- EMAIL ---*/}
            <label>Email</label>
            <input
             type="email"
             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
             className="signup-input form-control"
             placeholder="ejemplo@dominio.com"
             />

            {/*--- CONTRASEÑA ---*/}
            <label>Contraseña</label>
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])"
              min="4"
              max="10"
              className="signup-input form-control"
              placeholder="*****"
            />

            {/*--- REVALIDACIÓN ---*/}
            <label>Revalidar contraseña</label>
            <input
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])"
              min="4"
              max="10"
              className="signup-input form-control"
              placeholder="*****"
            />
          </form>
          <div className="text-left">
            <div className="submit-btn">
              <a href='#' className='btn btn-primary'>Enviar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
