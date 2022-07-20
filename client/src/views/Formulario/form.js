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

          <button class="upload-area">
            <span class="upload-icon">
            <svg width="40" height="40" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" /></svg>
            </span>

            <span class="upload-title">
              Arrastre y suelte aquí para cargar el archivo
            </span>

            <span class="upload-desc">
              O, puedes seleccionar un archivo haciendo click <strong>aquí</strong>
            </span>
          </button>

          <div class="form-footer">
            <button class="close-btn btn">Atrás</button>
            <button class="submit-btn btn btn-primary">Enviar</button>
          </div>

        </div>
      </div>
    </div>
  );
}
