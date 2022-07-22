
const express = require("express");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const adminRoute = require("./routes/admin.routes");
const authRoute = require("./routes/auth.routes");
const subsRoute = require("./routes/subsidies.routes");
const userRoute = require("./routes/user.routes");
const filesRoute = require("./routes/files.routes");
const multer = require("multer");



//Initialization
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));

//Middleware
app.use(express.urlencoded({ extended: false })); //acepta mas que strings formularios
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  return res.json({
    message: "error!!",
  });
});
//Global Variables

//Guardados de archivos local
const storage = multer.diskStorage({
  destination: (req, file, cb) => {;
    const { idformulario, rut } = req.body; 
    const path = 'documentos';
    fs.mkdirSync(path, { recursive: true })
    cb(null, 'documentos');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
    
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.any(), (req, res) => {
  
  const file = req.body;
  if (!file){
    console.log("error en el archivo");
  }
  else{
    res.send(file);
  }
  
});


//Routes
app.use("/api/subsidies",subsRoute);
app.use("/api/auth",authRoute);
app.use("/api/user", userRoute);
app.use("/api/files", filesRoute);
app.use("/api/admin", adminRoute);
//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
