const sequelize = require("../../database");
const DataTypes = require('sequelize')

const subsidies = sequelize.define('beneficio', {
    idbeneficio: { type: "varchar(10)", primaryKey: true },
    nombrebeneficio : { type: "varchar(240)", allowNull: false },
    descripcion : { type: DataTypes.STRING , allowNull: false },
});
module.exports = subsidies;
