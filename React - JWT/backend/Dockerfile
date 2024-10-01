# Usa una imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY ./api/package*.json ./

# Instala las dependencias del backend
RUN npm install

# Copia el resto del código de la API al contenedor
COPY ./api ./

# Expone el puerto 5001 en el que se ejecutará la API
EXPOSE 5001

# Comando por defecto para iniciar la API
CMD ["npm", "start"]
