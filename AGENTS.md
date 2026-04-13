Responde de forma concisa y directa. 
- Sin explicaciones innecesarias
- Sin repetir lo que el usuario dijo
- Sin frases de cierre como "espero que esto ayude"
- Solo el resultado o la acción solicitada

## Context7

Revisar context7.

## Proyecto

**Stack**: React + Express + MySQL  
**Puerto server**: 5000  
**Puerto client**: 3000

### Commands
- `npm run dev` - Corre server + client simultáneamente (concurrently)
- `npm run server` - Solo backend
- `npm run client` - Solo frontend

### Estructura
```
client/          # React (Vite)
server/          # Express + MVC
  src/
    models/     # Modelos MySQL
    controllers/ # Lógica de negocio
    routes/     # Rutas API
  config/
    db.js       # Conexión MySQL
```

### API Endpoints (Puerto 5000)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/tareas` | Listar todas las tareas |
| GET | `/api/tareas/:id` | Obtener una tarea |
| POST | `/api/tareas` | Crear tarea |
| PUT | `/api/tareas/:id` | Actualizar tarea |
| DELETE | `/api/tareas/:id` | Eliminar tarea |

## Tecnologías
- **Frontend**: React + Vite + CSS Modules
- **Backend**: Express + MySQL
- **Puerto client**: 3001 (3000 ocupado)

## Estructura frontend
```
client/src/
├── index.css              # Variables CSS globales
├── App.jsx + App.module.css
├── api/
│   └── tareas.js          # API layer
├── hooks/
│   └── useTareas.js       # Custom hook
└── components/
    ├── Layout/            # Header, Board
    ├── Tarea/             # TareaCard, TareaColumn, TareaForm
    └── UI/                # Button, Badge, Modal
```

## Pendiente
- Verificar que la app funcione en http://localhost:3001