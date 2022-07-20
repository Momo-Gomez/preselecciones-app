import "./topbar.css";
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

const Topbar = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="topback">
      <button onClick={() => navigate('/')} class="home-btn btn">Inicio</button>
        <div className='buttons'>
                  <button onClick={() => navigate('/usuario/ingreso', { replace: true })} href='#' className='btn'>
                  Ingresar
                  </button>
                  <button onClick={() => navigate('/usuario/registro')} href='#' className='btn btn-primary'>
                  Registro
                  </button>
                 
              </div>
        </div>
    </div>
  );
};

export default Topbar;
