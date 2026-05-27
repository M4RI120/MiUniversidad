const express = require("express");
const router = express.Router();

const Curso = require("../models/Curso");

// Ver todos los cursos
router.get("/cursos", async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
});

// Crear curso
router.post("/cursos", async (req, res) => {
  const nuevoCurso = new Curso(req.body);
  await nuevoCurso.save();
  res.json({ mensaje: "Curso creado", curso: nuevoCurso });
});

// Editar curso
router.put("/cursos/:id", async (req, res) => {
  const cursoActualizado = await Curso.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json({ mensaje: "Curso actualizado", curso: cursoActualizado });
});

// Eliminar curso
router.delete("/cursos/:id", async (req, res) => {
  await Curso.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Curso eliminado" });
});

module.exports = router;