const pool = require("../database");
//función para retornar todos los subsidios
const getSubsidies = async (req, res, next) => {
  try {
    const response = await pool.query("select * from beneficio");
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error.message);
  }
};
//función para retornar solo un subsidio
const getSubsidiesByid = async (req, res, next) => {
  try {
    const idbeneficio = req.params.idbeneficio;
    const response = await pool.query(
      "Select * from beneficio where idbeneficio=$1",
      [idbeneficio]
    );
    res.json(response.rows);
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  getSubsidies,
  getSubsidiesByid,
};
