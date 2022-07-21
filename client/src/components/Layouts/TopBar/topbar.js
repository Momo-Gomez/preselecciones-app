import "./topbar.css";
import React, { Component, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/Context";

const Topbar = () => {

  const navigate = useNavigate();

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    try {
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    console.log(user),
    <div className="container">
      <div className="topback">
      <div className=''>
          <button onClick={() => navigate('/')} className="home-btn btn">Inicio</button>

          
      </div>
      
        
                  {user ? 
                  (                                                   //Muestra este si el usuario esta logeado
                  <button onClick={handleLogout} className="btn buttons">       
                    {user && "SALIR"}
                  </button>
                  ) 
                  :     //Condicional de muestra uno o el otro
                  (                                                       //Muestra este si el usuario no esta logeado
                  <div className='buttons'>
                  <button onClick={() => navigate('/usuario/ingreso', { replace: true })} href='#' className='btn'>
                  Ingresar
                  </button>
                  <button onClick={() => navigate('/usuario/registro')} href='#' className='btn btn-primary'>
                  Registro
                  </button>
                  </div>
                  ) }
                  
                  
              </div>
        
        
    </div>
  );
};

export default Topbar;
