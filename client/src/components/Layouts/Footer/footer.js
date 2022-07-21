import "./footer.css";
import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div class="footer-content">
                <h2>Horizonte Ltda.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
                id mi eget vestibulum. Suspendisse id mauris quis sapien aliquet
                gravida.</p>
            </div>

            <div class="footer-bottom">
                <p>Copyright &copy;2022 Horizonte Ltda. diseñado por <span>Grupo_Hitman</span></p>
            </div>
        </footer>
    )
};