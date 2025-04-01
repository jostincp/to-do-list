# 📝 Aplicación de Lista de Tareas (To Do List App)

Una aplicación de lista de tareas completa con frontend en React y backend en Express, que permite gestionar tareas con descripción y estado.

![Badge React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![Badge Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)
![Badge Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express)
![Badge MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql)
![Badge Sequelize](https://img.shields.io/badge/Sequelize-6.37.6-52B0E7?logo=sequelize)

## 📋 Características

- ✅ Crear, leer, actualizar y eliminar tareas (CRUD completo)
- ✅ Marcar tareas como completadas
- ✅ Persistencia de datos en MySQL usando Sequelize
- ✅ Interfaz de usuario moderna con Tailwind CSS
- ✅ Arquitectura cliente-servidor con API RESTful
- ✅ Validación de formularios
- ✅ Estado global usando Context API

## 🚀 Demo

![Demo de la aplicación](https://via.placeholder.com/800x400?text=Demo+de+la+aplicaci%C3%B3n)

## 🔧 Tecnologías utilizadas

### Frontend
- React (Vite)
- Tailwind CSS
- Axios para peticiones HTTP
- Context API para gestión de estado

### Backend
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- Cors para comunicación cruzada

## 📂 Estructura del proyecto

```
todo-list/
├── frontend/              # Aplicación cliente (React)
│   ├── public/            # Archivos estáticos
│   │   ├── assets/        # Recursos estáticos
│   │   ├── components/    # Componentes React
│   │   ├── context/       # Contexto para estado global
│   │   └── services/      # Servicios API
│   ├── index.html         # Punto de entrada HTML
│   └── package.json       # Dependencias frontend
│
└── backend/               # Servidor API (Express)
    ├── config/            # Configuración (base de datos, etc.)
    ├── models/            # Modelos de datos (Sequelize)
    ├── routes/            # Rutas API
    ├── .env               # Variables de entorno
    ├── index.js           # Punto de entrada del servidor
    └── package.json       # Dependencias backend
```

## 🔌 Instalación y uso

### Requisitos previos
- Node.js (v14 o superior)
- MySQL (instalado y en ejecución)

### Configuración del backend

1. Clona este repositorio:
```bash
git clone https://github.com/jostincp/to-do-list.git
```

2. Configura la base de datos:
```bash
# Crea una base de datos en MySQL llamada 'todo_db'
mysql -u root -p
CREATE DATABASE todo_db;
```

3. Configura el archivo .env en la carpeta backend:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=todo_db
JWT_SECRET=clave_secreta_para_jwt
```

4. Instala las dependencias del backend:
```bash
cd backend
npm install
```

5. Inicia el servidor:
```bash
npm run dev
```

### Configuración del frontend

1. Instala las dependencias del frontend:
```bash
cd frontend
npm install
```

2. Inicia la aplicación:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

## 📱 Funcionalidades

### Gestión de tareas
- **Crear tarea**: Ingresa un título y descripción opcional.
- **Listar tareas**: Visualiza todas tus tareas pendientes y completadas.
- **Completar tarea**: Marca/desmarca el checkbox para cambiar el estado.
- **Eliminar tarea**: Elimina permanentemente una tarea.

### Verificación de base de datos
- Visualiza estadísticas en tiempo real de tus tareas.
- Comprueba la conexión con la base de datos.

## 🛠️ API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET    | /api/tasks | Obtener todas las tareas |
| POST   | /api/tasks | Crear una nueva tarea |
| PUT    | /api/tasks/:id | Actualizar una tarea existente |
| DELETE | /api/tasks/:id | Eliminar una tarea |
| GET    | /api/db-status | Verificar estado de la BD y estadísticas |

## 🔄 Flujo de datos

1. El frontend hace peticiones HTTP al backend utilizando Axios.
2. El backend procesa estas peticiones y realiza operaciones CRUD en la base de datos.
3. Los resultados son devueltos al frontend como respuestas JSON.
4. El Context API de React mantiene el estado global actualizado.

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir característica'`)
4. Sube los cambios (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.



Link del proyecto: [https://github.com/jostincp/to-do-list](https://github.com/tu-usuario/todo-list)

