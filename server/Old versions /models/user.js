const sequelize = require("../../database");

const user = sequelize.define('user', {
    rut: { type: "varchar(20)", primaryKey: true },
    contrasena: { type: "varchar(120)", allowNull: false },
    pnombre: { type: "varchar(80)", allowNull: false },
    snombre: { type: "varchar(80)", allowNull: false },
    apellidop: { type: "varchar(80)", allowNull: false },
    apellidom: { type: "varchar(80)", allowNull: false },
});
module.exports = user;