const pool = require("../database");
//función para crear formulario
const createForm = async (req, res) => {
  try {
    const data = req.body;
    const response = await pool.query("INSERT INTO formulario (idformulario,rut,fecha,situacion) VALUES (default,$1,default,1) RETURNING idformulario ",
    [
      data.rut,
    ]);
    const idFormulario = response.rows[0];
    res.status(200).json(idFormulario);
  } catch (error) {
    res.status(500).json(error);
  }
};

const UploadFiles = async(req, res) => {
  const data = req.body;
  try {
    const response = await pool.query("INSERT INTO documento (iddocumento,ruta,idformulario) VALUES ($1,$2,$3)", [
      data.filename,
      data.ruta,
      data.idformulario,
    ])
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}



module.exports = {
  createForm,
  UploadFiles,
};