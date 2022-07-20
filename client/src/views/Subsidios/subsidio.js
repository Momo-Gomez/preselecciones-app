import React, { Fragment } from "react";
import "./subsidio.css";
import { useNavigate } from "react-router-dom";


const subsidio = () => {
    const navigate = useNavigate();
    return (
        
        <div className="s-container">
            <h1 className="text-center p-3 "></h1>
            <h3 class="text-center p-3"></h3>
            <h2 className="p-5 ">Lista de Beneficios</h2>

            
            <div class="card mb-5 shadow bg-body rounded">
                <h5 class="card-header">DS-27 Reparaciones de todo tipo</h5>
                <div class="card-body">
                    <h5 class="card-title">Mejoramiento de la vivienda</h5>
                    <p class="card-text ">Obras de carácter estructural de instalaciones (sanitarias, eléctricas o gas), reparación de la envolvente (techumbre), y de mantención (terminaciones, revestimientos, ventanas, puertas, pinturas, cierros, entre otros).</p>
                    <h5 class="card-title">Ampliación de la vivienda</h5>
                    <p class="card-text ">Obras destinadas aumentar la superficie de la vivienda existente para resolver problemas sanitarios o de hacinamiento. Por ejemplo, construcción de un nuevo baño, dormitorio o cocina.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={() => navigate('/usuario/formulario')} class="form-btn btn btn-primary me-md-2" type="button">Hacer Trámite</button>
                    </div>
                </div>
            </div> 
             
            
        
            <div class="card mb-5 shadow bg-body rounded">
                <h5 class="card-header">DS-10 Viviendas Rurales</h5>
                <div class="card-body">
                    <p class="card-text">Este subsidio del Estado permite construir una vivienda en el terreno donde vive la familia interesada y se puede postular de manera individual o colectiva.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={() => navigate('/usuario/formulario')} class="form-btn btn btn-primary me-md-2" type="button">Hacer Trámite</button>
                    </div>
                </div>
            </div>
               
            <div class="card mb-5 shadow bg-body rounded">
                <h5 class="card-header">DS-01 Vivienda rural (Sitio propio)</h5>
                <div class="card-body">
                    <p class="card-text">Este apoyo del Estado permite a las familias que no son dueñas de una vivienda y tienen capacidad de ahorro, construir una vivienda de hasta 140 m2 en un sitio propio o en un terreno donde ya existe otra vivienda.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={() => navigate('/usuario/formulario')} class="form-btn btn btn-primary me-md-2" type="button">Hacer Trámite</button>
                    </div>
                </div>
            </div> 
            
            <div class="card mb-5 shadow bg-body rounded">
                <h5 class="card-header">DS-49 Vivienda Espacio urbano</h5>
                <div class="card-body">
                    <p class="card-text">Este apoyo del Estado permite construir una vivienda o un conjunto de ellas (casas o departamentos) sin crédito hipotecario en sectores urbanos o rurales.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onClick={() => navigate('/usuario/formulario')} class="form-btn btn btn-primary me-md-2" type="button">Hacer Trámite</button>
                    </div>
                </div>
            </div>   
        </div>   
    
    );
    
};export default subsidio;