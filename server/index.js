const express = require("express");
const path = require("path");

//Initialization
const app = express();
require("./database");

//Settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));

//Middleware
app.use(express.urlencoded({ extended: false })); //acepta mas que strings formularios
app.use(express.json());
//Global Variables

//Routes
app.use(require("./routes/users"));

//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});