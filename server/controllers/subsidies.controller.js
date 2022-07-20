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

module.exports = {
  getSubsidies,
};
