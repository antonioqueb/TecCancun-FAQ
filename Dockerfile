# Paso 1: Construir la imagen base con Node
FROM node:latest as build-stage

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración de tu proyecto
# Estos incluyen package.json y yarn.lock o package-lock.json
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build  

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
