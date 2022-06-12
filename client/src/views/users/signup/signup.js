import "./signup.css";

export default function signup() {
  return (
    <div className="container">
      <div className="signup">
        <span className="signup-title text-center">Registro</span>
        <form className="signup-form">
          {/* Información solicitada al cliente */}
          <label>Nombre</label>
          <input type="text" className="form-control" placeholder="Nombre" />

          <label>Apellidos</label>
          <input type="text" className="form-control" placeholder="Apellidos" />

          <label>RUT</label>
          <input type="text" className="form-control" placeholder="RUT" />

          <label>Email</label>
          <input type="text" className="form-control" placeholder="Email" />

          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />

          <label>Revalidar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </form>
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
  );
}
