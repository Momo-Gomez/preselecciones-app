const pool = require("../database");
//función para retornar todos los subsidios
const getSubsidies = async (req,res) => {
  try {
    const response = await pool.query("select * from beneficio");
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getSubsidies,
};
