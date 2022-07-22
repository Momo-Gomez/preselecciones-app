import React, { Fragment } from "react";
import "./Admin.css";
import { useContext } from "react";
import { Context } from "../../context/Context";


const Admin = () => {
  const { user } = useContext(Context); // para mostrar los datos del usuario
  return (
    
    <div class="uv-container">
            <h1 class="text-center p-5"></h1>
            
            <div class="uv-card card m-3">
              <span class="uv-info">Administrador</span>
              <span class="uv-name">Bienvenido {user.pnombre} {user.apellidop}</span>
        
            </div>

            <div class="list-group shadow">
              <h class="list-group-item list-group-item-action active text-bg-secondary" aria-current="true">Postulantes (Click sobre el nombre para descargar archivos)</h>
              <button type="button" class="list-group-item list-group-item-action">Nombre/Rut</button>
              <button type="button" class="list-group-item list-group-item-action">Nombre/Rut</button>
              <button type="button" class="list-group-item list-group-item-action">Nombre/Rut</button>
            </div>
    </div>      
    
  );
    
};export default Admin;