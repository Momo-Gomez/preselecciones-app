import './uv.css'
import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UserView()  {
    const navigate = useNavigate();
    return (
        <div class="uv-container">
            <h1 class="text-center p-5"></h1>
            
            <div class="profile-card card mt-3">

            </div>
        </div>
    )
}