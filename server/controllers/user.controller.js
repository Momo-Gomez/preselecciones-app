/** un usuario puede cambiar contraseña y recuperar su contraseña*/
const pool = require("../database");
const bcrypt = require("bcrypt");

const changePass = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const credenciales = req.body;
    const response = await pool.query("SELECT * FROM usuario WHERE rut=$1", [
      credenciales.rut,
    ]);
    const user = response.rows[0];
    if (!(await bcrypt.compare(credenciales.contraseña, user.contrasena))) {
      //verifica la contraseña anterior
      return res.status(400).json("Contraseña incorrecta!");
    }
    const hashedPass = await bcrypt.hash(credenciales.nuevaContraseña, salt); //encripta la nueva contraseña
    credenciales.nuevaContraseña = hashedPass;
    const response2 = await pool.query(
      "UPDATE usuario SET contrasena=$1 WHERE rut=$2", //asignamos la nueva contraseña
      [credenciales.nuevaContraseña, credenciales.rut]
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  changePass,
};
