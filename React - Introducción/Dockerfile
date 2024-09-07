# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia solo package.json y package-lock.json (si existe)
COPY react-app/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY react-app/ ./

# Expone el puerto 5173 (que es el puerto que Vite usa por defecto)
EXPOSE 5173

# Comando por defecto para iniciar la aplicación con Vite
CMD ["npm", "run", "dev"]
