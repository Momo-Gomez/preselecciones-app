import './uv.css'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UserView()  {
    const navigate = useNavigate();
    return (
        <div class="uv-container">
            <h1 class="text-center p-5"></h1>
            
            <div class="uv-card card m-3">
                <span class="uv-name">Nombre Usuario</span>
                <span class="uv-info">12.345.678-9</span>
                <span class="uv-info">user_email@domain.com</span>
            </div>

            <div class="uv-body">
                <div class="uv-sub-header">
                    <span class="uv-subsidies">Mis Subsidios</span>
                    <button class="sub-btn btn btn-primary">Explorar</button>
                </div>
                <div class="sub-group">
                    <div class="sub">
                        <span class="sub-name">Nombre Subsidio</span>
                        <span class="sub-body">Aquí va la descripción del subsidio</span>
                    </div>

                    <div class="sub">
                        <span class="sub-name">Nombre Subsidio</span>
                        <span class="sub-body">Aquí va la descripción del subsidio</span>
                    </div>

                    <div class="sub">
                        <span class="sub-name">Nombre Subsidio</span>
                        <span class="sub-body">Aquí va la descripción del subsidio</span>
                    </div>
                </div>
            </div>

        </div>
    )
}