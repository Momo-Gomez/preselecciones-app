import "./signin.css"

const signin = () => {
    return (
        <p> asda</p>
    );
}


export default function Login() {
    return(
        <div className="signin">
            <form className="signin-form">

                <label>RUT</label>
                <input 
                    type="text"
                    placeholder="RUT"
                />

                <label>Contraseña</label>
                <input 
                    type="text"
                    placeholder="Contraseña"
                />
            </form>
            <button className="sign-button">Ingresar</button>

        </div>
    );
}