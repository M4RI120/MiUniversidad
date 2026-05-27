const mongoose = require("mongoose");

const retroalimentacionSchema = new mongoose.Schema({
  profesor: String,
  estudiante: String,
  curso: String,
  tarea: String,
  comentario: String,
  fecha: String
});

module.exports = mongoose.model(
  "Retroalimentacion",
  retroalimentacionSchema,
  "Retroalimentacion"
);