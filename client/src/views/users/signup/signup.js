import "./signup.css";

export default function signup() {
  return (
    <div className="container">
      <div className="signup">
        {/*  Tarjeta  */}
        <div className="card mt-3">
          <span className="signup-title text-center">Registro</span>
          <form className="signup-form">
            {/* Información solicitada al cliente */}
            <label>Nombre</label>
            <input type="text" className="form-control" placeholder="Juanito" />

            <label>Apellidos</label>
            <input
              type="text"
              className="form-control"
              placeholder="Arcoíris"
            />

            <label>RUT</label>
            <input
              type="text"
              className="form-control"
              placeholder="12345678"
            />
            <input type="text" className="form-control" placeholder="9"/>

            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="soy_mejor_que_tu@ejemplo.com"
            />

            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="****"
            />

            <label>Revalidar contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="****"
            />
          </form>
          <div className="text-left">
            <button
              type="submit"
              className="submit-button btn btn-primary
                                            border border-white border-opacity-25
                                            btn-gorup
                                            mt-4 me-4
                                            shadow rounded-pill"
            >
              {" "}
              {/*Parámetros de diseño en bootstrap para el boton */}
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
