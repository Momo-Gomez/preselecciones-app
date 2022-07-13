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

const label = document.querySelector("label");

function onEnter() {
  label.classList.add("active");
}

function onLeave() {
  label.classList.remove("active");
}

label.addEventListener("dragenter", onEnter);

label.addEventListener("drop", onLeave);
label.addEventListener("dragenter", onLeave);
label.addEventListener("dragleave", onLeave);
label.addEventListener("dragexit", onLeave);

const input = document.querySelector("input");
input.addEventListener("change", (event) => {
  if (input.files.length > 0) {
  }
});
