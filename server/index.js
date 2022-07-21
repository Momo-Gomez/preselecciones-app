const express = require("express");
const path = require("path");
const cors = require("cors");
const authRoute = require("./routes/auth.routes");
const subsRoute = require("./routes/subsidies.routes");
const userRoute = require("./routes/user.routes");
const filesRoute = require("./routes/files.routes");

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

//Routes
app.use("/api/subsidies",subsRoute);
app.use("/api/auth",authRoute);
app.use("/api/user", userRoute);
app.use("/api/files", filesRoute);
//Static Files
app.use(express.static(path.join(__dirname, "public")));

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
