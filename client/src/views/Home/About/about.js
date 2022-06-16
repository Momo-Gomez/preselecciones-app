import React from "react";
import "./about.css";

import LIST from "../../../assets/about.jpg";
import FORM from "../../../assets/about.jpg";

const About = () => {
  return (
    <div class="container">
      <section id="about">
        <h2>Haz tus postulaciones de manera sencilla</h2>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
          id mi eget vestibulum. Suspendisse id mauris quis sapien aliquet
          gravida.
        </h5>

        <section>
          <div className="container about__container">
            <div className="about__list">
              <div className="about__list-img">
                <img src={LIST} alt="List About" />
              </div>
            </div>

            <div className="about__content">
              <h2>Infórmate</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis id mi eget vestibulum. Suspendisse id mauris quis
                sapien aliquet gravida.
              </p>
            </div>

            <div className="container about__container">
              <div className="about__list">
                <div className="about__list-img">
                  <img src={FORM} alt="List About" />
                </div>
              </div>
            </div>

            <div className="about__content">
              <h2>Sube</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                convallis id mi eget vestibulum. Suspendisse id mauris quis
                sapien aliquet gravida.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
