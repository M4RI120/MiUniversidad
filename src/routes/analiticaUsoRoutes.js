const express = require("express");
const router = express.Router();

const AnaliticaUso = require("../models/AnaliticaUso");

// Ver toda la analitica
router.get("/analitica", async (req, res) => {
  const datos = await AnaliticaUso.find();
  res.json(datos);
});

// Crear registro de analitica
router.post("/analitica", async (req, res) => {
  const nuevoRegistro = new AnaliticaUso(req.body);
  await nuevoRegistro.save();
  res.json({ mensaje: "Registro de analitica creado", analitica: nuevoRegistro });
});

// Editar registro
router.put("/analitica/:id", async (req, res) => {
  const registroActualizado = await AnaliticaUso.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    mensaje: "Registro de analitica actualizado",
    analitica: registroActualizado
  });
});

// Eliminar registro
router.delete("/analitica/:id", async (req, res) => {
  await AnaliticaUso.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Registro de analitica eliminado" });
});

module.exports = router;