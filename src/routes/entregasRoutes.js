const express = require("express");
const router = express.Router();

const Entrega = require("../models/Entrega");

// Ver todas las entregas
router.get("/entregas", async (req, res) => {
  const entregas = await Entrega.find();
  res.json(entregas);
});

// Crear entrega
router.post("/entregas", async (req, res) => {
  const nuevaEntrega = new Entrega(req.body);
  await nuevaEntrega.save();
  res.json({ mensaje: "Entrega creada", entrega: nuevaEntrega });
});

// Editar entrega
router.put("/entregas/:id", async (req, res) => {
  const entregaActualizada = await Entrega.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({ mensaje: "Entrega actualizada", entrega: entregaActualizada });
});

// Eliminar entrega
router.delete("/entregas/:id", async (req, res) => {
  await Entrega.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Entrega eliminada" });
});

module.exports = router;