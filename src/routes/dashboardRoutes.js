const express = require("express");
const router = express.Router();

const Calificacion = require("../models/Calificacion");
const Entrega = require("../models/Entrega");
const AnaliticaUso = require("../models/AnaliticaUso");

// Promedio de calificaciones por curso
router.get("/dashboard/promedio-cursos", async (req, res) => {
  const resultado = await Calificacion.aggregate([
    {
      $group: {
        _id: "$curso",
        promedioCalificacion: { $avg: "$calificacion" },
        totalCalificaciones: { $sum: 1 }
      }
    },
    {
      $sort: { promedioCalificacion: -1 }
    }
  ]);

  res.json(resultado);
});

// Total de entregas por curso
router.get("/dashboard/entregas-cursos", async (req, res) => {
  const resultado = await Entrega.aggregate([
    {
      $group: {
        _id: "$curso",
        totalEntregas: { $sum: 1 }
      }
    },
    {
      $sort: { totalEntregas: -1 }
    }
  ]);

  res.json(resultado);
});

// Actividad por rol
router.get("/dashboard/actividad-roles", async (req, res) => {
  const resultado = await AnaliticaUso.aggregate([
    {
      $group: {
        _id: "$rol",
        totalAcciones: { $sum: 1 },
        promedioDuracion: { $avg: "$duracionMinutos" }
      }
    },
    {
      $sort: { totalAcciones: -1 }
    }
  ]);

  res.json(resultado);
});

module.exports = router;