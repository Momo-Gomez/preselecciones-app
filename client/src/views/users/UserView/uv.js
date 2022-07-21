import './uv.css'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UserView()  {
    const navigate = useNavigate();
    return (
        <div className="uv-container">
            <h1 className="text-center p-5"></h1>
            
            <div className="profile-card card mt-3">
                {/* Nombre del usuario */}
                <span className="name">Nombre</span>
                <label className="RUT">12.345.678-9</label>
                <label className="email">emailname@domain.com</label>
            </div>

            <div className="bft-container">
                <form className="bft-form">
                    <span className="btf-title">Mis Beneficios</span>

                    <div className="bft-group">
                        
                    </div>
                </form>
            </div>
        </div>
    )
}