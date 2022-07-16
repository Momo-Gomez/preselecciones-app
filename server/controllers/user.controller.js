const pool = require("../database");
const bcrypt = require("bcrypt");

//función para registrar un nuevo usuario
const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const user = req.body;
    const hashedPass = await bcrypt.hash(user.contraseña, salt);
    user.contraseña = hashedPass;
    const response = await pool.query(
      "INSERT INTO usuario VALUES ($1,$2,$3,$4,$5,$6)",
      [
        user.rut,
        user.contraseña,
        user.pnombre,
        user.snombre,
        user.apellidop,
        user.apellidom,
      ]
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// función para ingresar
const signin = async (req, res) => {
  try {
    credenciales = req.body;
    const response = await pool.query(
      "SELECT * FROM usuario WHERE rut=$1",
      [
        credenciales.rut,
      ]
    );
    const user = response.rows[0]
    if (!user) {
      return res.status(400).json("Usuario no encontrado!");
    }
    if (!await bcrypt.compare(credenciales.contraseña, user.contrasena)) {
      return res.status(400).json("Contraseña incorrecta!");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  register,
  signin
};
