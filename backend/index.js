require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database"); // Importar conexión a la base de datos
const Task = require("./models/Task"); // Importar el modelo Task

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// 📌 Sincronizar la base de datos con los modelos
sequelize.sync({ force: false }) // ⚠️ "force: false" evita borrar datos existentes
  .then(() => {
    console.log("📌 Base de datos sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("❌ Error al sincronizar la base de datos:", error);
  });

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
