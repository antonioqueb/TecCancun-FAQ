# Construir la imagen base con Node
FROM node:latest

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto (package.json, etc.)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que tu aplicación utiliza
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
