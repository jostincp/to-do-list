const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// 📌 Obtener todas las tareas
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
});

// 📌 Crear una nueva tarea
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await Task.create({ title, description });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la tarea" });
  }
});

// 📌 Actualizar una tarea
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    task.title = title;
    task.description = description;
    task.completed = completed;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la tarea" });
  }
});

// 📌 Eliminar una tarea
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }

    await task.destroy();
    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
});

module.exports = router;
