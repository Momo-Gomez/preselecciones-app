const pool = require("../database");
//función para crear formulario
const createForm = async (req, res) => {
  try {
    const data = req.body;
    const response = await pool.query("INSERT INTO formulario (idformulario,rut,fecha,situacion) VALUES (default,$1,$2,1) RETURNING idformulario ",
    [ data.rut,
      data.fecha,
    ]
    ,(err)=>{
      res.status(500).json(err);
    });
    console.log(response);
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