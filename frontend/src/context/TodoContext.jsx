// src/context/TodoContext.jsx
import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1", completed: false },
    { id: 2, title: "Tarea 2", completed: true },
    { id: 3, title: "Tarea 3", completed: false },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
}
