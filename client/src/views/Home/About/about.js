import React from "react";
import './about.css'

import LIST from '../../../assets/about.jpg'
import FORM from '../../../assets/about.jpg'

const About = () => {
    return (
        <div class= 'container'>
            <div className='about-tittle'>
                <h2>Haz tus postulaciones de manera sencilla</h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis id mi eget vestibulum. Suspendisse id mauris quis sapien aliquet gravida.</h5>
            </div>

            <section>
                <div className="container about__container">
                    <h2>Infórmate</h2>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis id mi eget vestibulum. Suspendisse id mauris quis sapien aliquet gravida.</h5>
                    <div className="about__list">
                    <div className="about__list-img">
                        <img src={LIST} alt="List About"/>
                    </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container about__container">
                <h2>Sube</h2>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis id mi eget vestibulum. Suspendisse id mauris quis sapien aliquet gravida.</h5>
                <div className="about__list">
                    <div className="about__list-img">
                    <img src={FORM} alt="List About"/>
                    </div>
                </div>
                </div>
            </section>
            
        </div>
    )
}

export default About;