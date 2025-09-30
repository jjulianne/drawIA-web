# DrawIA - Frontend

**DrawIA** es una aplicación web para generar imágenes profesionales a partir de bocetos. Esta carpeta contiene únicamente el frontend de la aplicación.

---

## Estado del proyecto

Este proyecto está en desarrollo activo. Las características principales del frontend, como el lienzo de dibujo, el selector de estilos y la interacción con el backend, están implementadas y son funcionales. Actualmente, el proyecto se encuentra en una fase de mejora y expansión, con planes de agregar nuevas funcionalidades para enriquecer la experiencia del usuario.

---

## Stack Tecnológico

* **Frontend:** Vite + React + TypeScript + Tailwind CSS

## Instalación y ejecución local

### Clonar el repositorio

```bash
git clone https://github.com/jjulianne/drawIA.git
cd drawIA/frontend
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar servidor de desarrollo

```bash
npm run dev
```

### Abrir en el navegador

[http://localhost:5173](http://localhost:5173)

## Uso

1. Dibujar en el lienzo.
2. Seleccionar un estilo predefinido.
3. Agregar un prompt adicional si se desea.
4. Presionar **Generar** para enviar la información al backend y recibir la imagen final creada por la IA.

> Nota: El backend se encuentra por separado.

## Estructura del proyecto frontend

```
frontend/
├─ src/           # Código fuente React
├─ public/        # Archivos públicos (index.html, favicon, etc.)
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ vite.config.ts
```

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
