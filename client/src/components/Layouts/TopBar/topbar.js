import "./topbar.css";
import React, { Component, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../../../context/Context";

const Topbar = () => {

  const navigate = useNavigate();

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    console.log(user.rut);
    dispatch({ type: "LOGOUT" });
    
  };

  return (
    console.log(user),
    <div className="container">
      <div className="topback">
      <div className=''>
          <button onClick={() => navigate('/')} className="home-btn btn">Inicio</button>

          
      </div>
      
        
                  {user ? //Muestra este si el usuario esta logeado
                  (
                  <div className='buttons'>                                                  
                  <button onClick={handleLogout} className="btn">      
                    {user && "SALIR"}               
                  </button>
                  <button onClick={() => user.rut ? navigate( '/usuario'):navigate( '/admin')} className="btn btn-primary">      
                    {user && "PERFIL"}                 
                  </button>
                  </div>
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
