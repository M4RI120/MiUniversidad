const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  curso: String,
  profesor: String,
  fechaEntrega: String,
  puntos: Number
});

module.exports = mongoose.model("Tarea", tareaSchema, "Tareas");