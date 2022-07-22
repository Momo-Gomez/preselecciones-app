import React, { Fragment } from "react";
import "./Admin.css";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

var postulantes = [];


const Admin = () => {
  const { user } = useContext(Context); // para mostrar los datos del usuario

  const handlePostulantes = async () => {
    try {
      
      const res = await axios.get("http://localhost:5000/api/admin/postulaciones");       //optiene un array con todos los postulantes
      postulantes = JSON.stringify(res.data);
      console.log(postulantes);

    } catch (error) {
      console.log(error);
    }
   

  }


  return (
    
    <div class="uv-container">
            <h1 class="text-center p-5"></h1>
            
            <div class="uv-card card m-3">
              <span class="uv-info">Administrador</span>
              <span class="uv-name">Bienvenido {user.pnomombre} {user.apellidop}</span>
        
            </div>
            
            <div class="list-group shadow">
              <button onClick={handlePostulantes} type="button" class="list-group-item list-group-item-action">Actualizar</button>
              <h class="list-group-item list-group-item-action active text-bg-secondary" aria-current="true">Postulantes (Click sobre el nombre para descargar archivos)</h>
              <button type="button" class="list-group-item list-group-item-action">postulantes</button>
              <button type="button" class="list-group-item list-group-item-action">Juanitos Lechuga/20.342.123-5</button>
              <button type="button" class="list-group-item list-group-item-action">{postulantes[0]}</button>
            </div>
    </div>      
    
  );
    
};export default Admin;