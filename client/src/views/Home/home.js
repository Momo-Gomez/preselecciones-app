import React, { Fragment } from "react";
import "./home.css";

const imag = "familiaCasa.jpg"; //Se importa la img en una variable ya que es publica

const home = () => {
  return (
    <div className="container">
      <div className="text-center">
        <div className="border-top border-danger border-5">
          <img src={imag} height="544"></img>{" "}
          {/*Se llama a la img desde el src puesto en la variable*/}
        </div>
        <div className="SearchBarBG">
          <div className="container">
            <h1 className="fw-semibold"> Busca Aquí tu Beneficio </h1>
            <div className="row justify-content-center">
              <div className="col-5 d-flex justify-content-center">
                <div className="input-group">
                  {" "}
                  {/*Llamado al input para despliegue de lista */}
                  <select
                    className="form-select"
                    aria-label="SubsidiosDespliegue"
                  >
                    <option selected>Buscar...</option>
                    <option value="1">DS-27 Reparaciones de todo tipo</option>
                    <option value="2">DS-10 Viviendas Rurales</option>
                    <option value="3">
                      DS-01 Vivienda rural (Sitio propio)
                    </option>
                    <option value="4">DS-49 Vivienda Espacio urbano</option>
                  </select>
                  <button class="btn btn-primary" type="button">
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
