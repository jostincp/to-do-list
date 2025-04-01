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

// 📌 Ruta para verificar la conexión a la BD y estadísticas
app.get("/api/db-status", async (req, res) => {
  try {
    // Verificar conexión a la BD
    await sequelize.authenticate();
    
    // Obtener conteo de tareas
    const totalTasks = await Task.count();
    const completedTasks = await Task.count({ where: { completed: true } });
    const pendingTasks = totalTasks - completedTasks;
    
    res.json({
      connection: "Conectado a la base de datos correctamente",
      database: process.env.DB_NAME,
      statistics: {
        totalTasks,
        completedTasks,
        pendingTasks
      }
    });
  } catch (error) {
    console.error("❌ Error en la verificación de la BD:", error);
    res.status(500).json({
      connection: "Error al conectar con la base de datos",
      error: error.message
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
