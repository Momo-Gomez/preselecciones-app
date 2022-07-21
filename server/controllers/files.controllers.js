const pool = require("../database");
//función para crear formulario
const createForm = async (req, res) => {
  try {
    const response = await pool.query("INSERT INTO formulario (idformulario,rut,fecha,situacion) VALUES (default,$1,default,1) RETURNING idformulario ",[req.body.rut,]);
    const idFormulario = response.rows[0];
    res.status(200).json(idFormulario);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createForm,
};