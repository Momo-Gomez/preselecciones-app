import React, { Fragment } from "react";
import "./Admin.css";


const Admin = () => {
  return (
    
    
    <div className="container">
      <h1 className="text-center text-bg-danger "></h1>
      <h2 className="text-center text-bg-transparent p-5 "></h2>
      <div class="card mb-3">
        
          <div class="card-body">
            <h5 class="card-title">Nombre Usuario</h5>
            
          </div>
      </div>

      <h2 className="text-primary  p-3 ">Situación de Beneficios</h2>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card text-center"> {/* w-5 */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">There should be something written on this card, but I still don't know exactly what I should put</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        <div class="col">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">There should be something written on this card, but I still don't know exactly what I should put</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">There should be something written on this card, but I still don't know exactly what I should put</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">There should be something written on this card, but I still don't know exactly what I should put</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>      
    
  );
    
};export default Admin;