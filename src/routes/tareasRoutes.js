const express = require("express");
const router = express.Router();

const Tarea = require("../models/Tarea");

// Ver todas las tareas
router.get("/tareas", async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});

// Crear tarea
router.post("/tareas", async (req, res) => {
  const nuevaTarea = new Tarea(req.body);
  await nuevaTarea.save();
  res.json({ mensaje: "Tarea creada", tarea: nuevaTarea });
});

// Editar tarea
router.put("/tareas/:id", async (req, res) => {
  const tareaActualizada = await Tarea.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({ mensaje: "Tarea actualizada", tarea: tareaActualizada });
});

// Eliminar tarea
router.delete("/tareas/:id", async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Tarea eliminada" });
});

module.exports = router;