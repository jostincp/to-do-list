export default function TodoList() {
    return (
        <div className="main-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
            <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
                <h1 className="text-2x1 font-bold tex-center mb-4">To-Do-List</h1>
                
                <div className="flex mb-4">
                    <input
                    type="text"
                    placeholder="Nueva Tarea..."
                    className="flex-grow p-2 rounded-1 bg-gray-700 text-white border-gray-600 focus:outline-none"
                    />
                    <button className="p-2 bg-blue-500 rounder-r hover:bg-blue-600">
                        Agregar
                    </button>
                </div>

                <ul className="space-y-2">
                    <li className="flex justify-between items-center bg-gray-700 p-2 rounded">
                        <spna>Tarea de ejemplo</spna>
                        <div>
                            <button className="mr-2 text-green-400 hover:text-green-300">✔</button>
                            <button className="text-red-400 hover:text-red-300">✖</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}