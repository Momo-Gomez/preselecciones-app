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
                tupe="text" 
                placeholder="RUT" 
                class="signup-input" 
                oninput="checkRut (this)"
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- PRIMER NOMBRE ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Primer Nombre" 
                class="signup-input" 
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- SEGUNDO NOMBRE ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Segundo Nombre" 
                class="signup-input" 
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- APELLIDO PATERNO ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Apellido Paterno" 
                class="signup-input" 
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- APELLIDO MATERNO ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Apellido Materno" 
                class="signup-input" 
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- EMAIL ---*/}
            <div class="input-group">
              <input 
                tupe="email" 
                id="email"
                placeholder="Email" 
                class="signup-input" 
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- CONTRASEÑA ---*/}
            <div class="input-group">
              <input 
                tupe="text" 
                placeholder="Contraseña" 
                class="signup-input" 
                required/>
              <span class="border-bottom"></span>
            </div>

            {/*--- REVALIDACIÓN ---*/}
            <div class="input-group">
              <input tupe="text" placeholder="Revalidar Contraseña" class="signup-input" required/>
              <span class="border-bottom"></span>
            </div>
          </form>
          <div className="text-left">
            {/*Botón enviar que deriva a la vista de usuario*/}
            <div className="submit-btn">
              <a onClick={() => navigate('/usuario')} href='#' className='btn-submit btn btn-primary'>Enviar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
