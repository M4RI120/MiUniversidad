const mongoose = require("mongoose");

const analiticaUsoSchema = new mongoose.Schema({
  usuario: String,
  rol: String,
  accion: String,
  modulo: String,
  fecha: String,
  duracionMinutos: Number
});

module.exports = mongoose.model("AnaliticaUso", analiticaUsoSchema, "Analitica_Uso");