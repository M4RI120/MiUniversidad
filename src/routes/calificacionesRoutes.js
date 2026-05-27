const express = require("express");
const router = express.Router();

const Calificacion = require("../models/Calificacion");

// Ver todas las calificaciones
router.get("/calificaciones", async (req, res) => {
  const calificaciones = await Calificacion.find();
  res.json(calificaciones);
});

// Crear calificación
router.post("/calificaciones", async (req, res) => {
  const nuevaCalificacion = new Calificacion(req.body);
  await nuevaCalificacion.save();
  res.json({ mensaje: "Calificacion creada", calificacion: nuevaCalificacion });
});

// Editar calificación
router.put("/calificaciones/:id", async (req, res) => {
  const calificacionActualizada = await Calificacion.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({
    mensaje: "Calificacion actualizada",
    calificacion: calificacionActualizada
  });
});

// Eliminar calificación
router.delete("/calificaciones/:id", async (req, res) => {
  await Calificacion.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Calificacion eliminada" });
});

module.exports = router;