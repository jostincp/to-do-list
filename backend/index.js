require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const Task = require("./models/Task");
const taskRoutes = require("./routes/taskRoutes"); // 📌 Importar rutas

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Sincronizar la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log("📌 Base de datos sincronizada correctamente.");
  })
  .catch((error) => {
    console.error("❌ Error al sincronizar la base de datos:", error);
  });

// 📌 Usar las rutas de tareas
app.use("/api/tasks", taskRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
