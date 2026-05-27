const mongoose = require("mongoose");

const calificacionSchema = new mongoose.Schema({
  estudiante: String,
  curso: String,
  tarea: String,
  calificacion: Number,
  observacion: String,
  fecha: String
});

module.exports = mongoose.model("Calificacion", calificacionSchema, "Calificaciones");