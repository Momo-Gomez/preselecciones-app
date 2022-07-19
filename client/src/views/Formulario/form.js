import "./form.css";
import React from "react";

export default function Formulario() {
  return (
    <div class="form-container">
      <div class="form">
      <h1 class="text-center p-5"></h1>

        <div class="form-card card mt-3">
          <span class="form-title text-center">Formulario</span>
          <span class="form-req">Fotocopia de Cédula de Identidad</span>
          
          <form action="#">
            <i class="fas fa-cloud-upload-alt"></i>
            <p>Elige un archivo</p>
          </form>

          <section class="progress-area">
            <li class="row">
              <i class="fas fa-file-alt"></i>
              
              <div class="content">
                <div class="details">
                  <span class="name">image_01.png * Subiendo</span>
                  <span class="percent">50%</span>
                </div>

                <div class="progress-bar">
                  <div class="progress"></div>
                </div>
              </div>

            </li>
          </section>

          <section class="uploaded-area">
            <li class="row">
              <div class="content">
                <i class="fas fa-file-alt"></i>
                <div class="details">
                  <span class="name">image_01.png * Subido</span>
                  <span class="size">70 KB</span>
                </div>
              </div>

              <i class="fas fa-check"></i>
            </li>
          </section>
        </div>
      </div>
    </div>
  );
}
