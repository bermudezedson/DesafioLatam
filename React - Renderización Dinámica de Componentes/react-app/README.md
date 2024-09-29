# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


/estructura
│
├── /backend
│   ├── /api
│   │   ├── /controllers
│   │   ├── /models
│   │   ├── /routes
│   │   ├── /utils
│   │   ├── /config
│   │   └── server.js
│   └── Dockerfile   (Dockerfile del backend)
│
├── /frontend
│   ├── /react-app
│   │   ├── /public
│   │   ├── /src
│   │   │   ├── /components
│   │   │   ├── /data
│   │   │   ├── /utils
│   │   │   ├── App.jsx
│   │   │   ├── index.js
│   │   │   └── App.css
│   │   ├── .env        (Variables de entorno del frontend)
│   │   ├── package.json (Dependencias del frontend)
│   ├── Dockerfile   (Dockerfile del frontend)
│
├── docker-compose.yml  (Archivo para levantar frontend y backend)
└── README.md   (Documentación del proyecto)
