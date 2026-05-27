const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  matricula: String,
  correo: String,
  password: String,
  rol: String
});

module.exports = mongoose.model("Usuario", usuarioSchema, "Usuarios");