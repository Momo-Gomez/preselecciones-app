const pool = require("../database");
//función para retornar todos los subsidios
const getSubsidies = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM beneficio");
    const subsidios = response.rows;
    res.status(200).json(subsidios);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getSituation = async (req, res) => {
  try {
    const formulario = req.body
    const response = await pool.query("SELECT situation FROM formulario WHERE rut=$1 and idformulario=$2",[formulario.rut ,formulario.idformulario,]);
    const subsidios = response.rows;
    res.status(200).json(subsidios);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getSubsidies,
  getSituation
};
