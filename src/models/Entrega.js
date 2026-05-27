const mongoose = require("mongoose");

const entregaSchema = new mongoose.Schema({
  estudiante: String,
  tarea: String,
  curso: String,
  archivo: String,
  comentario: String,
  fechaEntrega: String,
  estado: String
});

module.exports = mongoose.model("Entrega", entregaSchema, "Entregas");