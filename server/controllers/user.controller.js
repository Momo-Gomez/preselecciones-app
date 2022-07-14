const pool = require("../database");
const {validaRut,validaContra,validaLargoMax,validaLargoMin} = require("./auth.controller")
const bcrypt = require("bcrypt");

//función para registrar un nuevo usuario
const register = async (req, res) => {
  try {
    const errors = [];
    const salt = await bcrypt.genSalt(10); 
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
    //validaciones
    errors.push(validaRut(rut,dv,));
    errors.push(validaContra(contrasena,rcontrasena));
    errors.push(validaLargoMax(contrasena));
    errors.push(validaLargoMin(contrasena));
    if (errors.length > 0) {
      throw errors;
    }
    const hashedPass = await bcrypt.hash(contrasena, salt);
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
      //verificar usuario
      const rut = req.params.rut;
      const salt = await bcrypt.genSalt(10); 
      const pass = req.params.contrasena;
      const hashedPass = await bcrypt.hash(pass, salt);
      const response = await pool.query("Select * from usuario where rut=$1 and contrasena=$2", [
      rut,hashedPass,
      ]);
      res.json(response.rows);
    } catch (error) {
        res.status(500).json(error)
    }
};
module.exports = {
    register
};