# Paso 1: Construir la imagen base con Node
FROM node:latest as build-stage

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de configuración de tu proyecto
# Estos incluyen package.json y yarn.lock o package-lock.json
COPY package*.json ./
COPY yarn.lock ./

# Instalar las dependencias del proyecto
RUN yarn install

# Copiar el resto del código fuente del proyecto
COPY . .

# Construir la aplicación para producción
RUN yarn build

# Paso 2: Preparar la imagen de producción con Nginx
FROM nginx:stable-alpine as production-stage

# Copiar el build de producción desde la etapa de construcción
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
