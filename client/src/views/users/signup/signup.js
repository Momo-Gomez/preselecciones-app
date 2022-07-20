import "./signup.css";
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

export default function signup() {
  const navigate = useNavigate();
  return (
    <div className="s-container">
      <div className="signup">
        <h1 class="text-center p-5"></h1>
        {/*  Tarjeta  */}
        <div className="signup-card card mt-3">
          <span className="signup-title text-center">Registro</span>
          <form className="signup-form">
            {/* Información solicitada al cliente */}

            {/*--- RUT ---*/}
            <div class="input-group">
              <input 
                type="text" 
                placeholder="Ej. 123456789" 
                class="signup-input" 
                autoComplete="off"
                id="rut"
                required
              />
              <label class="label">RUT</label>
            </div>

            {/*--- PRIMER NOMBRE ---*/}
            <div class="input-group">
              <input 
                type="text" 
                placeholder="Ej. Alex" 
                class="signup-input" 
                autoComplete="off"
                id="primer-nombre"
                required
              />
              <label class="label">Primer Nombre</label>
            </div>

            {/*--- SEGUNDO NOMBRE ---*/}
            <div class="input-group">
              <input 
                type="text" 
                placeholder="Ej. Cruz" 
                class="signup-input" 
                autoComplete="off"
                id="segundo-nombre"
                required
              />
              <label class="label">Segundo Nombre</label>
            </div>

            {/*--- APELLIDO PATERNO ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Ej. González" 
                class="signup-input" 
                autoComplete="off"
                id="apellido-paterno"
                required
              />
              <label class="label">Apellido Paterno</label>
            </div>

            {/*--- APELLIDO MATERNO ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Ej. Pérez" 
                class="signup-input" 
                autoComplete="off"
                id="apellido-materno"
                required
              />
              <label class="label">Apellido Materno</label>
            </div>

            {/*--- EMAIL ---*/}
            <div class="input-group">
              <input 
                tupe="email" 
                id="email"
                placeholder="Email" 
                class="signup-input" 
                autoComplete="off"
                required
              />
              <label class="label">Email</label>
            </div>

            {/*--- CONTRASEÑA ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="*********" 
                class="signup-input" 
                id="contraseña"
                autoComplete="off"
                required
              />
              <label class="label">Contraseña</label>
            </div>

            {/*--- REVALIDACIÓN ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="*********" 
                class="signup-input" 
                id="rev-contraseña"
                autoComplete="off"
                required
              />
              <label class="label">Revalidación</label>
            </div>
          </form>
          <div className="text-left">
            {/*Botón enviar que deriva a la vista de usuario*/}
            <div className="submit">
              <a onClick={() => navigate('/usuario')} href='#' className='btn-submit btn btn-primary'>Enviar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
