/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import "./signin.css";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/Context";
import  axios from "axios";
// import { use } from "../../../../../server/routes/auth.routes"; No se para que era pero tiraba error


export default function Login() {
  const navigate = useNavigate();

  const rutRef = useRef();     // var que almacenara rut del usuario para el login
  const passRef = useRef();     // var que almacena Password para el login
  const { dispatch, isFetching } = useContext(Context);
  const [ errorMessage, setErrorMessage ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch( { type: "LOGIN_START" } );
    try {
      const res = await axios.post("http://localhost:5000/api/auth/usuario/ingreso",{
        rut: rutRef.current.value,
        contrasena: passRef.current.value,
      })
      dispatch({type: "LOGIN_SUCCESS", payload: {...res.data}});
      


    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data);
      dispatch({type: "LOGIN_FAILURE"});
    }

  };

  return (
    <div className="s-container">
      <div className="signin">
        <h1 className="text-center p-5"></h1>
        {/* Tarjeta  */}
        
        <div className="signin-card card mt-3">
          
          <span className="signin-title text-center">Ingreso</span>
          {errorMessage && <div className="error mb-3"> {errorMessage} </div>}
          <form className="signin-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                className="signin-input"
                placeholder="Ej. 123456789"
                autoComplete="off"
                id="rut"
                ref={rutRef}
              />
              <label className="label">RUT</label>
            </div>


            <div className="input-group">
              <input
                type="password"
                className="signin-input"
                placeholder="*********"
                autoComplete="off"
                id="contraseña"
                ref={passRef}
              />
              <label className="label">Contraseña</label>
            </div>
            <div className="signin-btn center">
              <button href="#" className="submit-btn btn btn-primary" type="submit" disabled={isFetching} >
                Ingresar
                </button>
            </div>

          </form>
          <div className="text-left">
            {/*<div className="signin-btn">
              <a onClick={() => navigate('/usuario')} href="#" className="submit-btn btn btn-primary">Ingresar</a>
             </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
