# Portafolio Web - Amaro Villalobos Palma

Repositorio con el código de mi portafolio personal, desarrollado como parte de la carrera de **Ingeniería en Informática en Duoc UC** (Evaluación de Desarrollo Fullstack).

El objetivo del proyecto es presentar mis trabajos académicos, proyectos personales y habilidades técnicas mediante una interfaz web limpia, interactiva y responsive, construida con tecnologías web estándar sin depender de frameworks externos.

---

## 📌 Características y funcionalidades

- **Diseño temático (Claro / Oscuro):**
  - Modo claro con estilo pergamino / mapa rústico.
  - Modo oscuro con ambientación inspirada en *The Legend of Zelda* y efectos de desenfoque (*glassmorphism*).
  - Tipografía de cabecera con fuente *Cinzel* (Google Fonts).

- **Filtro dinámico de proyectos:**
  - Clasificación por categorías (*Web & Frontend*, *Backend & Java*, *Inteligencia Artificial*).
  - Filtrado en tiempo real manipulando el DOM con JavaScript vanilla.

- **Formulario de contacto funcional:**
  - Validación completa en el cliente (longitud mínima de nombre, validación de formato de correo con Regex y longitud de mensaje).
  - Envío asíncrono con `fetch()` conectado a un webhook de **Google Apps Script** para recibir los mensajes en una planilla / correo.
  - Manejo de estados: cargando, confirmación de éxito y alerta en caso de error.

- **Detalles de interacción y UX:**
  - Barra superior de progreso de lectura vinculada al scroll de la página.
  - Navegación con detección de sección activa (*scroll spy*).
  - Botón flotante para volver arriba (*smooth scroll*).

---

## 📁 Estructura del proyecto

```text
Evaluacion-Fullstack-II-main/
│
├── assets/
│   ├── Avatar.jpg          # Foto de perfil
│   ├── zelda.jpg           # Fondo para el modo oscuro
│   └── zelda-claro.jpg     # Fondo para el modo claro
│
├── index.html              # Estructura semántica (HTML5)
├── styles.css              # Estilos, variables CSS, temas y media queries
├── script.js               # Lógica de interacción, filtros, validaciones y envío
└── README.md               # Documentación del proyecto
```

---

## 🛠️ Tecnologías utilizadas

- **HTML5:** Estructura semántica (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Variables nativas (`:root`), Flexbox, CSS Grid, animaciones y diseño adaptativo (*Mobile First* / *Responsive*).
- **JavaScript (ES6+):** Manipulación del DOM, eventos de scroll, validaciones y peticiones asíncronas con `fetch`.
- **Integraciones y librerías externas:**
  - Google Fonts (*Cinzel* y fuentes del sistema).
  - [Font Awesome](https://fontawesome.com/) (iconografía general).
  - [Devicon](https://devicon.dev/) (iconos de lenguajes y tecnologías).
  - Google Apps Script (backend ligero para recepción de mensajes).

---

## 🚀 Cómo visualizar el proyecto localmente

No requiere instalación de dependencias ni gestores de paquetes:

1. **Clonar el repositorio o descargar el ZIP:**
   ```bash
   git clone https://github.com/amaro117/portafolio-web.git
   ```

2. **Abrir el proyecto:**
   - Puedes hacer doble clic directamente en el archivo `index.html` para abrirlo en cualquier navegador web moderno.
   - O si usas Visual Studio Code, abrir la carpeta y presionar **"Go Live"** con la extensión **Live Server**.

---

## 👤 Autor

- **Amaro Villalobos Palma**
- Estudiante de Ingeniería en Informática - Duoc UC
- GitHub: [@amaro117](https://github.com/amaro117)
