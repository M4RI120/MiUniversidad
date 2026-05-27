const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  nombreCurso: String,
  clave: String,
  carrera: String,
  profesor: String,
  semestre: Number
});

module.exports = mongoose.model("Curso", cursoSchema, "Cursos");