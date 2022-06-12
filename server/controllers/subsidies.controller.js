const pool = require("../database");

const getSubsidies = async (req, res, next) => {
  try {
    const response = await pool.query("select * from beneficio");
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getSubsidiesByid = async (req, res, next) => {
  try {
    const idbeneficio = req.params.idbeneficio;
    const response = await pool.query("Select  from beneficio where idbeneficio=$1", [
      rut,
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

const getUserByrut = async (req, res) => {
  const rut = req.params.rut;
  
  res.json(response.rows);
};



module.exports = {
  getSubsidies,
};
