
import "./topbar.css";

const topbar = () => {     
    return (
        <div className="container">
            <div className="topback">      {/*SE LLAMA AL ESTILO topback de TOPBAR*/}
                    <div className="container d-flex justify-content-end">
                    <button type="button" className="btn btn-primary 
                                                    border border-white border-opacity-25
                                                    btn-group
                                                    mt-3 me-3
                                                    shadow rounded-pill"
                                                    aria-label = "First group"> {/*Parametros de diseño en bootstrap para el boton */}
                    Ingresar 
                    </button>

                    <button type="button" className="btn btn-danger
                                                    border border-white border-opacity-25
                                                    btn-group
                                                    mt-3 me-3
                                                    shadow
                                                    rounded-pill"
                                                    aria-label = "Second group"> {/*Parametros de diseño en bootstrap para el boton */}
                    Registro </button>
                    </div>
                
                
            </div>
        </div>
        
    );
}


export default topbar;