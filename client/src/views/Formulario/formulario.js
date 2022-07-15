import "./formulario.css";
import React from "react";

export default function Formulario() {
  return (
    <div class="form-container">
      <h1 class="text-center p-5"></h1>

      <div class="from-card card mt-3">
        <span class="form-title text-center">Formulario</span>

        <form class="form-req">
          <label class="req">FOTOCOPIA DE CEDULA DE IDENTIDAD</label>

          <label class="file-input" for="file">
            <div class="drop-zone">
              <p>
                <b>Exportar</b> o suéltelo aquí
              </p>
            </div>
            <input type="file" id="file" />
          </label>
        </form>

      </div>
    </div>
  );
}
