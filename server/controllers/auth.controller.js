const pool = require("../database");
const bcrypt = require("bcrypt");

//función para registrar un nuevo usuario
const userRegister = async (req, res) => {
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

// función para ingresar usuario
const userSignin = async (req, res) => {
  try {
    const credenciales = req.body;
    const response = await pool.query("SELECT * FROM usuario WHERE rut=$1", [
      credenciales.rut,
    ]);
    const user = response.rows[0];
    if (!user) {
      return res.status(400).json("rut no encontrado!");
    }
    if (!(await bcrypt.compare(credenciales.contraseña, user.contrasena))) {
      return res.status(400).json("Contraseña incorrecta!");
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// función para ingresar administrador
const adminSignin = async (req, res) => {
  try {
    const credenciales = req.body;
    const response = await pool.query(
      "SELECT * FROM administrador WHERE correo=$1",
      [credenciales.correo]
    );
    const admin = response.rows[0];
    if (!admin) {
      return res.status(400).json("correo no encontrado!");
    }
    if (admin.contrasena = -1) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(credenciales.contraseña, salt);
      admin.contrasena = hashedPass;
      const response2 = await pool.query(
        "UPDATE administrador SET contrasena=$1 WHERE correo=$2", //asignamos la nueva contraseña
        [admin.contrasena, credenciales.correo]
      );
    }
    if (!(await bcrypt.compare(credenciales.contraseña, admin.contrasena))) {
      return res.status(400).json("Contraseña incorrecta!");
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  userRegister,
  userSignin,
  adminSignin,
};
