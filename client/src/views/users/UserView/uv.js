import "./uv.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../context/Context";

export default function UserView() {
  const navigate = useNavigate();
  const { user } = useContext(Context); // para mostrar los datos del usuario
  return (
    <div className="uv-container">
      <h1 class="text-center p-5"></h1>

      <div class="uv-card card m-3">
        <span class="uv-name">
          Bienvenido {user.pnombre} {user.apellidop}
        </span>
        <span class="uv-info">{user.rut}</span>
        <span class="uv-info">{user.correo}</span>
      </div>

      <div class="uv-body">
        <div class="uv-sub-header">
          <span class="uv-subsidies">Mis Subsidios</span>
          <button class="sub-btn btn btn-primary">Postular</button>
        </div>

        {/*Tarjetas de subsidios */}

        <div class="sub-group">
          <div class="sub sub1">
            <span class="sub-name">DS-27 Reparaciones de todo tipo</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Mejoramiento de la vivienda y ampliación de vivienda
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

          <div class="sub sub2">
            <span class="sub-name">DS-10 Viviendas Rurales</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Permite construir una vivienda en el
            terreno donde vive la familia interesada
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

          <div class="sub sub3">
            <span class="sub-name">DS-01 Vivienda rural (Sitio propio)</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Permite a las familias que no son dueñas de
            una vivienda y tienen capacidad de ahorro, construir una vivienda de
            hasta 140 m2 en un sitio propio o en un terreno donde ya existe otra
            vivienda.
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

          <div class="sub sub4">
            <span class="sub-name">DS-49 Vivienda Espacio urbano</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Permite construir una vivienda o un conjunto
            de ellas (casas o departamentos) sin crédito hipotecario en sectores
            urbanos o rurales.
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
