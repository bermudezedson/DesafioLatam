# Usa una imagen oficial de Node.js
FROM node:18

# Crea un directorio de trabajo para la app
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY ./react-app/package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código del frontend al directorio de trabajo
COPY ./react-app ./

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 5173

# Inicia la aplicación de React
CMD ["npm", "run", "dev"]
