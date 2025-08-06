# 🏪 Backend Drizzle - API REST

API REST para gestión de tiendas y productos utilizando Express.js, PostgreSQL y Drizzle ORM.

## 📁 Estructura del Proyecto

```
backend-drizzle/
├── src/
│   ├── controllers/      # Controladores de la API
│   │   ├── products.controllers.js
│   │   └── store.controllers.js
│   ├── lib/             # Configuraciones y utilidades
│   │   └── db.js        # Configuración de la base de datos
│   ├── models/          # Modelos de datos
│   │   ├── index.js
│   │   ├── products.js
│   │   └── store.js
│   └── routes/          # Rutas de la API
│       ├── product.routes.js
│       └── store.routes.js
├── drizzle/            # Migraciones de la base de datos
├── .env               # Variables de entorno
├── .env.example       # Ejemplo de variables de entorno
├── index.js          # Punto de entrada de la aplicación
└── package.json
```

## 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Drizzle ORM
- Morgan (logging)
- Nodemon (desarrollo)

## ⚙️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/Backend_Drizzle.git
cd backend-drizzle
```

2. Instalar dependencias con pnpm:
```bash
pnpm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Configurar la base de datos en el archivo `.env`:
```
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db"
```

## 🗄️ Base de Datos

La aplicación utiliza PostgreSQL como base de datos y Drizzle ORM para el manejo de la misma.

### Estructura de las tablas:

#### Tabla Store
- id (UUID)
- nombre (VARCHAR)
- direccion (VARCHAR)
- responsable (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

#### Tabla Products
- id (UUID)
- nombre (VARCHAR)
- descripcion (VARCHAR)
- precio (DECIMAL)
- stock (INTEGER)
- storeId (UUID - Foreign Key)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## 🛠️ Comandos Disponibles

```bash
# Iniciar servidor en modo desarrollo
pnpm run dev

# Generar migraciones de base de datos
pnpm drizzle-kit generate:pg

# Aplicar migraciones
pnpm drizzle-kit push:pg
```

## 🌐 Endpoints de la API

### Tiendas (Stores)
- `GET /store` - Obtener todas las tiendas
- `GET /store/:id` - Obtener una tienda específica
- `POST /store` - Crear nueva tienda
- `PUT /store/:id` - Actualizar una tienda
- `DELETE /store/:id` - Eliminar una tienda

### Productos (Products)
- `GET /product` - Obtener todos los productos
- `GET /product/:id` - Obtener un producto específico
- `POST /product` - Crear nuevo producto
- `PUT /product/:id` - Actualizar un producto
- `DELETE /product/:id` - Eliminar un producto

## 📝 Variables de Entorno

El archivo `.env.example` muestra la estructura requerida para las variables de entorno:

```env
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/nombre_db
             └──┘ └───────┘ └─────────────────┘ └────┘
              ʌ    ʌ          ʌ                  ʌ
        rol  -│    │          │- host             │- base de datos
                   │
                   │- contraseña
```