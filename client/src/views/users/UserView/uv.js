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
            <span class="sub-name">Nombre Subsidio</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis id mi eget vestibulum. Suspendisse id mauris quis sapien
                aliquet gravida.
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

          <div class="sub sub2">
            <span class="sub-name">Nombre Subsidio</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis id mi eget vestibulum. Suspendisse id mauris quis sapien
                aliquet gravida.
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

          <div class="sub sub3">
            <span class="sub-name">Nombre Subsidio</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis id mi eget vestibulum. Suspendisse id mauris quis sapien
                aliquet gravida.
                </p>
            </div>
            <div class="approve-btn">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
            </div>
          </div>

          <div class="sub sub4">
            <span class="sub-name">Nombre Subsidio</span>
            <div class="sub-body-cont">
                <p class="sub-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis id mi eget vestibulum. Suspendisse id mauris quis sapien
                aliquet gravida.
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
