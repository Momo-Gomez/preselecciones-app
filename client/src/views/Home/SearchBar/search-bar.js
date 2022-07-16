import React from "react";
import './search-bar.css';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

    return (
        <div className="container-fluid search-bar">
            <h1 className="fw-bold text-search"> ¡Revisa los beneficios a los que puedes postular! </h1>
            <div className="row justify-content-center">
              <div className="col-5 d-flex justify-content-center">
                <div className="input-group">

                  <button onClick={() => navigate('/subsidios', { replace: true })} class="search-btn btn btn-primary">
                    Click Aquí
                  </button>

                </div>
              </div>
            </div>
          </div>
    )
}

export default SearchBar;