const mongoose = require("mongoose");

const inscripcionSchema = new mongoose.Schema({
  estudiante: String,
  matricula: String,
  curso: String,
  fecha: String
});

module.exports = mongoose.model("Inscripcion", inscripcionSchema, "Inscripciones");