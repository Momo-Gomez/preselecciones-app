const pool = require("../database");
//función para retornar todos los subsidios
const getSubsidies = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM beneficio");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getSubsidies,
};
