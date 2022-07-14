import "./formulario.css";
import React from "react";

export default function Formulario() {
  return (
    <div class="file-container">
      <label class="file-input" for="file">
        <div class="drop-zone">
          <p>
            <b>Exportar</b> o suéltalo aquí
          </p>
        </div>
        <input type="file" id="file" />
      </label>
    </div>
  );
}