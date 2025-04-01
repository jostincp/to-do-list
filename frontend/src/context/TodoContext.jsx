import { createContext, useState, useEffect } from "react";
import api from "../services/api"; // Importamos Axios correctamente

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Obtener todas las tareas
  const obtenerTareas = async () => {
    try {
      setLoading(true);
      const respuesta = await api.get("/tasks"); // Ruta correcta
      console.log("Tareas obtenidas:", respuesta.data);
      setTodos(respuesta.data);
    } catch (error) {
      console.error("Error al obtener las tareas", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Crear una nueva tarea
  const crearTarea = async (titulo, descripcion) => {
    try {
      setLoading(true);
      const response = await api.post("/tasks", {
        title: titulo,
        description: descripcion,
      });
      console.log("Tarea creada:", response.data);
      // Actualizamos directamente el estado de las tareas
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error al crear la tarea", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Actualizar una tarea
  const updateTodo = async (id, updates) => {
    try {
      setLoading(true);
      
      // Encontrar la tarea actual para mantener sus propiedades
      const currentTodo = todos.find(todo => todo.id === id);
      
      if (!currentTodo) {
        throw new Error("Tarea no encontrada en el estado local");
      }
      
      // Combinar la tarea actual con las actualizaciones
      const updatedData = {
        title: currentTodo.title,
        description: currentTodo.description || "",
        ...updates
      };
      
      console.log("Enviando actualización:", updatedData);
      
      const response = await api.put(`/tasks/${id}`, updatedData);
      setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error("Error al actualizar la tarea", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Eliminar una tarea
  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      await api.delete(`/tasks/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("Error al eliminar la tarea", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Llamada inicial para obtener las tareas
  useEffect(() => {
    obtenerTareas();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, loading, crearTarea, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
