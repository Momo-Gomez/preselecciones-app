const pool = require("../database");
//función para crear formulario
const createForm = async (req, res) => {
  try {
    console.log("probando");
    const data = req.body;
    const response = await pool.query("INSERT INTO formulario (idformulario,correo,rut,fecha,situacion) VALUES (default,$1,$2,$3,1) RETURNING idformulario ",
    [{correo: data.email,
      rut: data.rut,
      fecha: data.fecha,
    }
    ]);
    const idFormulario = response.rows[0];
    res.status(200).json(idFormulario);
  } catch (error) {
    res.status(500).json(error);
  }
};

const UploadFiles = async(req, res) => {
  try {
    
  } catch (error) {
    
  }
}

module.exports = {
  createForm,
  UploadFiles,
};