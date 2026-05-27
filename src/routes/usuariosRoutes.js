const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");

router.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.post("/login", async (req, res) => {
  const { correo, password } = req.body;

  const usuario = await Usuario.findOne({ correo, password });

  if (!usuario) {
    return res.status(401).json({ mensaje: "Correo o contraseña incorrectos" });
  }

  res.json({
    mensaje: "Login correcto",
    usuario: {
      nombre: usuario.nombre,
      correo: usuario.correo,
      rol: usuario.rol
    }
  });
});

module.exports = router;