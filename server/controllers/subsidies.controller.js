const pool = require("../database");

const getSubsidies = async (req, res, next) => {
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
