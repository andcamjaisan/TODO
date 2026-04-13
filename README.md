# TODO App

Gestion de tareas estilo Kanban con React + Express + MySQL.

## Stack

- **Frontend:** React 18 + Vite
- **Backend:** Express.js
- **Base de datos:** MySQL
- **Puertos:** Server 5000, Client 3001

## Estructura

```
client/          # React (Vite)
server/          # Express + MVC
  src/
    models/     # Modelos MySQL
    controllers/ # Logica de negocio
    routes/     # Rutas API
  config/
    db.js       # Conexion MySQL
```

## Instalacion

```bash
npm install
cd server && npm install
cd ../client && npm install
```

## Ejecucion

```bash
npm run dev    # Inicia server + client simultaneamente
```

O individualmente:
```bash
npm run server  # Solo backend
npm run client # Solo frontend
```

## API Endpoints

| Metodo | Endpoint | Descripcion |
|--------|----------|------------|
| GET | `/api/tareas` | Listar todas las tareas |
| GET | `/api/tareas/:id` | Obtener una tarea |
| POST | `/api/tareas` | Crear tarea |
| PUT | `/api/tareas/:id` | Actualizar tarea |
| DELETE | `/api/tareas/:id` | Eliminar tarea |

## Variables de Entorno

Crear `.env` en `server/`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=tareas_db
PORT=5000
```

## Despliegue

### Railway (gratuito)

1. Conectar repositorio a Railway
2. Agregar plugin MySQL
3. Configurar variables de entorno
4. Deploy automatico

### Coolify

1. Instalar Coolify en VPS gratuito
2. Crear proyecto y conectar repo
3. Agregar base de datos MySQL