// src/components/TodoList.jsx
import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoList() {
  const { tasks, addTask, toggleTask, deleteTask } = useContext(TodoContext);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
      <h1 className="text-2xl font-bold text-white mb-4">To-Do List</h1>
      <form onSubmit={handleAddTask} className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea..."
          className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
        >
          Agregar
        </button>
      </form>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 rounded-md ${
              task.completed ? "bg-green-600" : "bg-gray-700"
            }`}
          >
            <label className="flex-1 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
            </label>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-600 hover:bg-red-700 text-white p-1 rounded-md"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
