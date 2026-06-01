# MiUniversidad

## Descripción

MiUniversidad es una plataforma donde podemos iniciar de 4 manera como Admin de la pagina, coordinadores, profesores y alumnos dependeindo del rol de acceso les cambia la interfaz por los permisos de cada quien.

## Tecnologías utilizadas

- MongoDB Atlas, Mongo Compass
- Node.js
- Express.js
- HTML- Visual Estudio Code
- JavaScript

## Integrantes

- Rosmery Ruiz Garibay
- Jocelyn Johari Carrillo Adame
- Maritzel Calleja Mosso



### Carpeta public

Contiene las interfaces del sistema:

- login.html
- administrador.html
- coordinador.html
- estudiante.html
- profesor.html

### Carpeta src

Contiene la lógica principal del sistema:

- models/
- routes/
- backend.js

## Instalación

Para Clonar el repositorio:
```
  git clone https://github.com/M4RI120/MiUniversidad.git
```
Para Entrar al proyecto:

```
  cd MiUniversidad
```

Instalar dependencias:

```bash
npm install
```

## Configuración

Crear un archivo `.env` con la siguiente información:

```env
MONGO_URI=<Aqui va el enlace de conexion de Mongodb, pero por cuestiones de seguiridad no se pondra>
PORT=3000
```

## Ejecución

Iniciar el servidor:

```
node src/backend.js
```

## URL del sistema

```
http://localhost:3000
```

## Funcionalidades

  #Administrador

- Gestión de usuarios
- Gestión de cursos
- Gestión académica

  # Profesor

- Visualización de cursos
- Gestión de tareas
- Calificación de entregas

  # Estudiante

- Consulta de cursos
- Inscripción a cursos
- Consulta de calificaciones
- Entrega de actividades

  # Coordinador

- Consulta de información académica
- Seguimiento de estudiantes y profesores

## Base de datos

Colecciones:

- Usuarios
- Estudiantes
- Profesores
- Cursos
- Inscripciones
- Entregas
- Calificaciones
- Retroalimentacion
- Analitica_Uso
- Carreras
- Equipos
- Tareas

## Índices implementados

- Índice simple
- Índice compuesto
- Índice de texto

## Agregaciones implementadas

- Promedio de calificaciones
- Estudiantes por carrera
- Entregas por curso
