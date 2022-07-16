import './uv.css'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UserView()  {
    const navigate = useNavigate();
    return (
        <div class="uv-container">
            <h1 class="text-center p-5"></h1>
            
            <div class="profile-card card mt-3">
                {/* Nombre del usuario */}
                <span class="name">Nombre</span>
                <label class="RUT">12.345.678-9</label>
                <label class="email">emailname@domain.com</label>
            </div>

            <div class="bft-container">
                <form class="bft-form">
                    <span class="btf-title">Mis Beneficios</span>

                    <div class="bft-group">
                        
                    </div>
                </form>
            </div>
        </div>
    )
}