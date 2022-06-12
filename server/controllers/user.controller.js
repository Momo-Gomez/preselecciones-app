const pool = require("../database");
//función para registrar un nuevo usuario
const createUser = async (req, res, next) => {
  try {
    const errors = [];
    const {
      rut,
      dv,
      contrasena,
      pnombre,
      snombre,
      apellidop,
      apellidom,
      rcontrasena,
    } = req.body;
    if (contrasena!= rcontrasena){
      errors.push({text: "Contraseñas no coinciden"})
    }
    if(contrasena < 4){
      errors.push({text: "Contraseña demasiado corta, intente con mas de 4 caracteres"})
    }
    if (contrasena > 11){
      errors.push({text: "Contraseña demasiado larga, intente con menos de 11 caracteres"})
    }
    if (errors>0){
      
    }
    const response = await pool.query(
      "INSERT INTO usuario (rut,dv,contrasena,pnombre,snombre,apellidop,apellidom,estadocivil) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [rut, dv, contrasena, pnombre, snombre, apellidop, apellidom]
    );
    res.json({
      message: "Usuario agregado exitosamente",
      body: {
        user: {
          rut,
          dv,
          contrasena,
          pnombre,
          snombre,
          apellidop,
          apellidom,
          estadocivil,
        },
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  createUser,
};
