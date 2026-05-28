const express = require("express");
const router = express.Router();

const Inscripcion = require("../models/Inscripcion");
const Curso = require("../models/Curso");

router.get("/inscripciones", async (req, res) => {
  const inscripciones = await Inscripcion.find();
  res.json(inscripciones);
});

router.post("/inscripciones", async (req, res) => {
  const { estudiante, matricula, curso } = req.body;

  const cursoEncontrado = await Curso.findOne({ nombreCurso: curso });

  if (!cursoEncontrado) {
    return res.status(404).json({ mensaje: "Curso no encontrado" });
  }

  const totalInscritos = await Inscripcion.countDocuments({ curso });

  if (totalInscritos >= cursoEncontrado.cupo) {
    return res.status(400).json({ mensaje: "El curso ya no tiene cupos disponibles" });
  }

  const yaInscrito = await Inscripcion.findOne({ estudiante, curso });

  if (yaInscrito) {
    return res.status(400).json({ mensaje: "Ya estás inscrito en este curso" });
  }

  const nuevaInscripcion = new Inscripcion({
    estudiante,
    matricula,
    curso,
    fecha: new Date().toISOString().split("T")[0]
  });

  await nuevaInscripcion.save();

  res.json({ mensaje: "Inscripción realizada", inscripcion: nuevaInscripcion });
});

router.delete("/inscripciones/:id", async (req, res) => {
  await Inscripcion.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Inscripción cancelada" });
});

module.exports = router;