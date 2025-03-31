import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
        <div className="flex justify-center items-center h-screen bg-gray-900">
          <TodoList />
        </div>
    </TodoProvider>
  );
}

export default App;