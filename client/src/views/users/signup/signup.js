import "./signup.css";

export default function signup(){
    return (
        <div className="signup">
            <span className="signup-title">Registro</span>
            <form className="signup-form">
                
                {/* Información solicitada al cliente */}
                <label>Nombre</label>
                <input 
                    type="text"
                    className="signup-input"
                    placeholder="Nombre"
                />
                
                <label>Apellidos</label>
                <input
                    type="text"
                    className="signup-input"
                    placeholder="Apellidos"
                />

                <label>RUT</label>
                <input
                    type="text"
                    className="signup-input"
                    placeholder="RUT"
                />

                <label>Email</label>
                <input
                    type="text"
                    className="signup-input"
                    placeholder="Email"
                />

                <label>Contraseña</label>
                <input
                    type="text"
                    className="signup-input"
                    placeholder="****"
                />

                <label>Revalidar contraseña</label>
                <input
                    type="text"
                    className="signup-input"
                    placeholder="****"
                />
            </form>

        </div>
    )
}