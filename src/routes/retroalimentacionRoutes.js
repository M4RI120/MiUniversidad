const express = require("express");
const router = express.Router();

const Retroalimentacion = require("../models/Retroalimentacion");

// Ver todas las retroalimentaciones
router.get("/retroalimentacion", async (req, res) => {
  const retroalimentaciones = await Retroalimentacion.find();
  res.json(retroalimentaciones);
});

// Crear retroalimentación
router.post("/retroalimentacion", async (req, res) => {
  const nuevaRetro = new Retroalimentacion(req.body);
  await nuevaRetro.save();
  res.json({ mensaje: "Retroalimentacion creada", retroalimentacion: nuevaRetro });
});

// Editar retroalimentación
router.put("/retroalimentacion/:id", async (req, res) => {
  const retroActualizada = await Retroalimentacion.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    mensaje: "Retroalimentacion actualizada",
    retroalimentacion: retroActualizada
  });
});

// Eliminar retroalimentación
router.delete("/retroalimentacion/:id", async (req, res) => {
  await Retroalimentacion.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Retroalimentacion eliminada" });
});

module.exports = router;