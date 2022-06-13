const pool = require("../database");
const bcrypt = require("bcrypt");

//función para registrar un nuevo usuario
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
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
    if (contrasena != rcontrasena) {
      errors.push({ text: "Contraseñas no coinciden" });
    }
    if (contrasena.length < 4) {
      errors.push({
        text: "Contraseña demasiado corta, intente con mas de 4 caracteres",
      });
    }
    if (contrasena.length > 10) {
      errors.push({
        text: "Contraseña demasiado larga, intente con menos de 11 caracteres",
      });
    }
    if (errors.length > 0) {
      throw errors;
    }
    const hashedPass = await bcrypt.hash(contrasena, salt);
    console.log(hashedPass.length);
    const response = await pool.query(
      "INSERT INTO usuario (rut,dv,contrasena,pnombre,snombre,apellidop,apellidom) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [rut, dv, hashedPass, pnombre, snombre, apellidop, apellidom]
    );
    res.json({
      message: "Usuario agregado exitosamente",
      body: {
        user: {
          rut,
          dv,
          hashedPass,
          pnombre,
          snombre,
          apellidop,
          apellidom,
        },
      },
    });
  } catch (error) {
    res.status(500).json(error)
  }
};

// función para ingresar
const signin = async(req,res) => {
    try {
    
    } catch (error) {
        res.status(500).json(error)
    }
};

module.exports = {
  register,
  signin
};
