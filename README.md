# ViveMedellín - Feature 4: Grupos y Comunidades

**Proyecto: Plataforma Inteligente para el Descubrimiento y Recomendación de Actividades Locales**

## Introducción

**ViveMedellín** es una plataforma diseñada para unir personas con intereses similares, promover nuevas amistades y fortalecer las comunidades locales. Permite a los usuarios crear y explorar grupos, publicar contenido y recibir notificaciones sobre las actividades más recientes en sus comunidades favoritas.

Este repositorio corresponde al desarrollo del **Feature 4**, el cual se enfoca en la creación, gestión y exploración de grupos o comunidades dentro de la plataforma.

## Objetivo General del Feature 4

Desarrollar una funcionalidad integral para la creación y gestión de grupos o comunidades dentro de la plataforma ViveMedellín, que permita a los usuarios conectar con personas de intereses comunes, organizar actividades conjuntas, compartir contenido y fomentar la participación activa, mediante opciones de autenticación, configuración de privacidad, gestión de participantes y notificaciones en tiempo real.

---

## Integrantes

- **Análisis 2:** Guillermo Uribe
- **IngeWeb:** Valentina Cadena

---

## Enlaces de Interés

- **Figma**: [Diseño UI - Feature 4](https://www.figma.com/design/qeQEjv3HEpEbJmr30JaPQ8/P3.-ViveMedellin-Feature-4.-Grupos?node-id=12-145&m=dev)

---

## Rol de Maquetación y Enrutamiento

El desarrollo del frontend se realizó respetando los principios de **Atomic Design**, organizando los componentes en átomos, moléculas y organismos para garantizar un sistema escalable y mantenible. A partir del diseño en Figma, se replicaron con precisión las vistas requeridas, asegurando la coherencia visual y una navegación fluida.

Se implementó el **enrutamiento dinámico y estático** usando las capacidades de Next.js, permitiendo:

- Rutas dinámicas para ver detalles de cada grupo (`/grupo/[id]`)
- Redirecciones programadas tras acciones (por ejemplo, crear grupo o unirse)
- Reutilización de layouts y secciones entre vistas

Además, se desarrollaron comportamientos interactivos como ventanas modales, actualizaciones dinámicas de contenido, y simulación de acciones como “unirse a un grupo” en ausencia de integración con backend.

---

## Tecnologías Utilizadas

- **Next.js 13** – Framework de React para aplicaciones rápidas y escalables
- **React** – Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** – Framework de utilidades para maquetación rápida
- **TypeScript** – Superconjunto de JavaScript con tipado estático
- **Vercel** – Plataforma para despliegue rápido y optimizado

---

## Arquitectura del Proyecto

```plaintext
/public
  └── logos/                  → Archivos estáticos como imágenes e íconos

/src
  └── components/
      ├── atoms/              → Componentes básicos reutilizables (botón, input, etc.)
      ├── molecules/          → Combinación de átomos con lógica interna (cards, headers, modales)
      └── organisms/          → Secciones completas de UI (formularios, secciones, sidebar)

  └── pages/                  → Sistema de rutas de Next.js
      ├── grupo/
      │   └── [id].tsx
      ├── index.tsx              → Página principal
      ├── crear-grupo.tsx        → Formulario de creación de grupos
      ├── busquedaGrupos.tsx     → Resultados de búsqueda           → Detalle de grupo (ruta dinámica)
      ├── login.tsx
      └── _app.tsx / _document.tsx  → Configuración global

  └── styles/
      └── globals.css         → Estilos globales
```
