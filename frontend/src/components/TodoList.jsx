import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import api from "../services/api";

function TodoList() {
  const { todos, loading, crearTarea, updateTodo, deleteTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");
  const [description, setDescription] = useState("");
  const [dbStatus, setDbStatus] = useState(null);
  const [showStatus, setShowStatus] = useState(false);

  // Verificar estado de la base de datos
  const checkDbStatus = async () => {
    try {
      const response = await api.get("/db-status");
      setDbStatus(response.data);
      setShowStatus(true);
    } catch (error) {
      setDbStatus({
        connection: "Error al conectar con la base de datos",
        error: error.message
      });
      setShowStatus(true);
    }
  };

  // Crear nueva tarea
  const handleCreateTodo = async () => {
    if (!newTodo.trim()) return;
    await crearTarea(newTodo, description);
    setNewTodo("");
    setDescription("");
  };

  // Cambiar estado de tarea
  const handleToggleTodo = async (id, completed) => {
    await updateTodo(id, { completed: !completed });
  };

  // Eliminar tarea
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
  };

  return (
    <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white">Lista de Tareas</h1>
        <button
          onClick={checkDbStatus}
          className="bg-indigo-500 text-white px-3 py-1 rounded text-sm"
        >
          Verificar BD
        </button>
      </div>

      {showStatus && dbStatus && (
        <div className={`mb-4 p-3 rounded text-sm ${dbStatus.error ? 'bg-red-800 text-white' : 'bg-green-800 text-white'}`}>
          <p>{dbStatus.connection}</p>
          {dbStatus.statistics && (
            <div className="mt-2 flex gap-3">
              <span>Total: {dbStatus.statistics.totalTasks}</span>
              <span>Completadas: {dbStatus.statistics.completedTasks}</span>
              <span>Pendientes: {dbStatus.statistics.pendingTasks}</span>
            </div>
          )}
          <button 
            onClick={() => setShowStatus(false)} 
            className="text-xs underline mt-1 hover:text-gray-300"
          >
            Cerrar
          </button>
        </div>
      )}

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white outline-none"
        />
        <textarea
          placeholder="Descripción (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white outline-none"
          rows="2"
        />
        <button
          onClick={handleCreateTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Agregar
        </button>
      </div>

      {loading ? (
        <p className="text-white">Cargando tareas...</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="p-2 rounded bg-gray-700 flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id, todo.completed)}
                  className="w-5 h-5 rounded cursor-pointer accent-blue-500"
                />
                <div className="flex flex-col">
                  <span
                    className={`font-medium ${
                      todo.completed ? "line-through text-gray-500" : "text-white"
                    }`}
                  >
                    {todo.title}
                  </span>
                  {todo.description && (
                    <span className={`text-sm ${
                      todo.completed ? "line-through text-gray-600" : "text-gray-400"
                    }`}>
                      {todo.description}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
