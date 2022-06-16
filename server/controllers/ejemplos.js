const pool = require("../database");
const getUsers = async (req, res) => {
  const response = await pool.query("select * from usuario");
  res.status(200).json(response.rows);
};
const getUserByrut = async (req, res) => {
  const rut = req.params.rut;
  const response = await pool.query("Select * from usuario where rut=$1", [
    rut,
  ]);
  res.json(response.rows);
};
const createUser = async (req, res) => {
  const {
    rut,
    dv,
    contrasena,
    pnombre,
    snombre,
    apellidop,
    apellidom,
    estadocivil,
  } = req.body;
  const response = await pool.query(
    "INSERT INTO usuario (rut,dv,contrasena,pnombre,snombre,apellidop,apellidom,estadocivil) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
    [rut, dv, contrasena, pnombre, snombre, apellidop, apellidom, estadocivil]
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
};
const deleteUserByrut = async (req, res) => {
  const rut = req.params.rut;
  const response = await pool.query("delete from usuario where rut=$1", [rut]);
  console.log(response);
  res.json(`usuario ${rut} eliminado`);
};

const updateUserByrut = async (req, res) => {
  const rut = req.params.rut;
  const { estadocivil } = req.body;
  const response = await pool.query(
    "update usuario set estadocivil= $1 where rut=$2",
    [estadocivil, rut]
  );
  res.send("usuario actualizado");
};

module.exports = {
  getUsers,
  getUserByrut,
  createUser,
  deleteUserByrut,
  updateUserByrut,
};



