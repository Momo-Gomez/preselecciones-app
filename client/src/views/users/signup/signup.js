import "./signup.css";
import React, { Component, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../context/Context";

export default function signup() {
  const navigate = useNavigate();
  const [rut, setRut] = useState("");
  const [contrasena, setpass] = useState("");
  const [correo, setEmail] = useState("");
  const [pnombre, setPNombre] = useState("");
  const [snombre, setSNombre] = useState("");
  const [apellidop, setApellidoP] = useState("");
  const [apellidom, setApellidoM] = useState("");
  const [revPass, setRevPass] = useState("");
  const { user, dispatch } = useContext(Context);

  const [ errorMessage, setErrorMessage ] = useState("");   //Para dar mensajes de error

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("probando");
    try {
      if (contrasena === revPass){
        if (rut.length >= 8){
          try {
            const res = await axios.post("http://localhost:5000/api/auth/usuario/registro", {
            rut,
            contrasena,
            pnombre,
            snombre,
            apellidop,
            apellidom,
            correo,
          })
          dispatch({type: "LOGIN_SUCCESS", payload: {...res.data}});

          } catch (error) {
            setErrorMessage(error.response.data);
          }
          
        }
        else{
          console.log("Rut invalido");
          setErrorMessage(" Rut Invalido ");
        }
        
      }
      else{
        console.log("contraseña de revalidacion no coincide");
        setErrorMessage(" contraseña de revalidacion no coinciden ");
      }
    } catch (error) {
      console.log(error);
    }
    
    
  }

  return (
    <div className="s-container">
      <div className="signup">
        <h1 class="text-center p-5"></h1>
        {/*  Tarjeta  */}
        <div className="signup-card card mt-3">
          <span className="signup-title text-center">Registro</span>
          {errorMessage && <div className="error mb-3"> {errorMessage} </div>}      {/*MENSAJE DE ERROR APARECE EN CASO DE QUE OCURRA */}
          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Información solicitada al cliente */}

            {/*--- RUT ---*/}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Ej. 123456789" 
                class="signup-input" 
                autoComplete="off"
                id="rut"
                required
                onChange={e=>setRut(e.target.value)}        //Setea la var rut como el ingresado por el usuario
              />
              <label className="label">RUT</label>
            </div>

            {/*--- PRIMER NOMBRE ---*/}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Ej. Alex" 
                class="signup-input" 
                autoComplete="off"
                id="primer-nombre"
                required
                onChange={e=>setPNombre(e.target.value)}        //Setea la var pNombre como el ingresado por el usuario
              />
              <label className="label">Primer Nombre</label>
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
                onChange={e=>setSNombre(e.target.value)}        //Setea la var sNombre como el ingresado por el usuario
              />
              <label className="label">Segundo Nombre</label>
            </div>

            {/*--- APELLIDO PATERNO ---*/}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Ej. González" 
                class="signup-input" 
                autoComplete="off"
                id="apellido-paterno"
                required
                onChange={e=>setApellidoP(e.target.value)}        //Setea la var apellidoP como el ingresado por el usuario
              />
              <label className="label">Apellido Paterno</label>
            </div>

            {/*--- APELLIDO MATERNO ---*/}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Ej. Pérez" 
                class="signup-input" 
                autoComplete="off"
                id="apellido-materno"
                required
                onChange={e=>setApellidoM(e.target.value)}        //Setea la var apellidoM como el ingresado por el usuario
              />
              <label className="label">Apellido Materno</label>
            </div>

            {/*--- EMAIL ---*/}
            <div className="input-group">
              <input 
                type="email" 
                id="email"
                placeholder="Email" 
                class="signup-input" 
                autoComplete="off"
                required
                onChange={e=>setEmail(e.target.value)}        //Setea la var email como el ingresado por el usuario
              />
              <label className="label">Email</label>
            </div>

            {/*--- CONTRASEÑA ---*/}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="*********" 
                class="signup-input" 
                id="contraseña"
                autoComplete="off"
                required
                onChange={e=>setpass(e.target.value)}        //Setea la var pass como el ingresado por el usuario
              />
              <label className="label">Contraseña</label>
            </div>

            {/*--- REVALIDACIÓN ---*/}
            <div className="input-group">
              <input 
                type="text" 
                placeholder="*********" 
                class="signup-input" 
                id="rev-contraseña"
                autoComplete="off"
                required
                onChange={e=>setRevPass(e.target.value)}        //Setea la var revpass como el ingresado por el usuario
              />
              <label className="label">Revalidación</label>
            </div>
              <button href='#' className='submit btn-submit btn btn-primary'>Enviar</button>
          </form>
          <div className="text-left">
            {/*Botón enviar que deriva a la vista de usuario
            <div className="submit">
              <a onClick={() => navigate('/usuario')} href='#' className='btn-submit btn btn-primary'>Enviar</a>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
