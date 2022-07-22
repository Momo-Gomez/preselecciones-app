import React from "react";
import "./about.css";

import LIST from "../../../assets/about.jpg";
import FORM from "../../../assets/about.jpg";

const About = () => {
  return (
    <div class="container">
      <section id="about">
        <h2 class="title">Haz tus postulaciones de manera sencilla</h2>
        <h5>
          Regístrate para crear tu usuario como postulante, así estarás listo
          para subir tu documentación y postular a los distintos subsidios
          habitacionales disponibles. Recuerda que estos permiten comprar,
          construir, arrendar, mejorar el entorno o ampliar una vivienda, y
          pueden ser utilizados en sectores urbanos y rurales.
        </h5>

        <div class="info">
          <div class="img-cont">
            <div class="about-img">
              <img src={LIST} alt="List About" />
            </div>
          </div>

          <span class="info-title">Infórmate</span>
          <span class="info-cont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis id mi eget vestibulum. Suspendisse id mauris quis sapien
            aliquet gravida.
          </span>
        </div>

        <div class="info">
          <div class="img-cont">
            <div class="about-img">
              <img src={FORM} alt="List About" />
            </div>
          </div>

          <span class="info-title">Sube</span>
          <span class="info-cont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis id mi eget vestibulum. Suspendisse id mauris quis sapien
            aliquet gravida.
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
