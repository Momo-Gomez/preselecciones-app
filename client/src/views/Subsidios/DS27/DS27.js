import React, { Fragment } from "react";
import "./DS27.css";
const imag = "familiaCasa.jpg"; //Se importa la img en una variable ya que es publica


const DS27 = () => {
    return (    
        <div className="container">
            <h1 className="text-center text-bg-danger p-3 "></h1>
            <h1 className="text-center text-bg-danger p-3 "></h1>
            <h1 className="text-center text-bg-danger p-3 "></h1>
            <h2 className="text-primary  p-3">DS-27 Reparaciones de todo tipo</h2>

            <div class="card  mb-2">
                <div class="col-md-4">
                    <img src={imag} class="img-fluid rounded-start" alt={imag}></img>{" "}
                </div> 
                <div class="card-body">
                    <h5 class="card-title">¿En qué consisten los proyectos para la vivienda?</h5>
                    <p class="card-text ">El Programa de Mejoramiento de Viviendas y Barrios busca mejorar la calidad de
                                            vida de las familias que habitan en áreas o localidades urbanas de más de 5 mil
                                            habitantes.</p>
                    <p class="card-text ">Este subsidio busca favorecer las condiciones de seguridad y habitabilidad de las
                                            familias a través de proyectos de reparación o mejoramiento de las viviendas, así
                                            como también, eliminar el hacinamiento por medio de proyectos de ampliación.</p>
                    </div>      
            </div>

            <div class="card  mb-2">
                <div class="card-body">        
                    <h5 class="card-title">Requisitos para postular a los proyectos</h5>
                    <p class="card-text ">* Ser mayor de 18 años.</p>
                    <p class="card-text ">* Contar con Cédula Nacional de Identidad Vigente. Las personas extranjeras deben presentar Cédula de Identidad para extranjeros con permanencia definitiva y Certificado de Permanencia Definitiva (emitido por el Departamento de Extranjería del Ministerio del Interior o por la Policía de Investigaciones de Chile).</p>
                    <p class="card-text ">* Estar inscrito en el Registro Social de Hogares (RSH). En el caso de las postulaciones individuales, las personas no deben superar el tramo del 60% del RSH. Para postulaciones grupales, el 60% de los integrantes del grupo que postula, debe pertenecer hasta el 60%, la diferencia puede superar los tramos del RSH.</p>
                    <p class="card-text ">* Contar con el ahorro mínimo que exige la alternativa a la cual se espera postular. El dinero debe estar depositado en una cuenta de ahorro el último día del mes anterior a la postulación.</p>
                    <p class="card-text ">* Contar con la asesoría de una Entidad Patrocinante (ex -Prestador de Servicios de Asistencia Técnica, PSAT), los cuales se pueden consultar en www.minvu.cl.</p>
                    <p class="card-text ">* Contar con un constructor o contratista inscrito en el Registro de Constructores del Minvu, para la ejecución de las obras.</p>
                    <p class="card-text ">* Contar con permiso de edificación de la Dirección de Obras Municipales (DOM), cuando el proyecto lo requiera.</p>
               </div>      
            </div>
        </div>
    );
    
};export default DS27;