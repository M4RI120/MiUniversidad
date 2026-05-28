const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

const usuarioRoutes = require("./routes/usuariosRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
const tareasRoutes = require("./routes/tareasRoutes");
const entregasRoutes = require("./routes/entregasRoutes");
const calificacionesRoutes = require("./routes/calificacionesRoutes");
const retroalimentacionRoutes = require("./routes/retroalimentacionRoutes");
const analiticaUsoRoutes = require("./routes/analiticaUsoRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const inscripcionesRoutes = require("./routes/inscripcionesRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(usuarioRoutes);
app.use(cursosRoutes);
app.use(tareasRoutes);
app.use(entregasRoutes);
app.use(calificacionesRoutes);
app.use(retroalimentacionRoutes);
app.use(analiticaUsoRoutes);
app.use(dashboardRoutes);
app.use(inscripcionesRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch((error) => console.log("Error Mongo:", error));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/login.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});