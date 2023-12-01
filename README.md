
# TecCancun-FAQ
![Captura de Pantalla 2023-11-30 a la(s) 20 58 47](https://github.com/antonioqueb/TecCancun-FAQ/assets/92013606/457a941a-20df-436d-9847-8f6577779b67)

Este es el archivo README para la sección de Preguntas Frecuentes (FAQ) de TecCancun, enfocado en ayudar a los desarrolladores durante la configuración y el uso de la aplicación.

## Instalación

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Puedes verificar si Node.js está instalado ejecutando `node -v` en tu terminal. Esto debería mostrar la versión actual de Node.js. Si no tienes Node.js instalado, sigue estas instrucciones:

1. Visita [Node.js Download Page](https://nodejs.org/en/download/).
2. Descarga e instala la versión recomendada para tu sistema operativo.
3. Una vez instalado, verifica la instalación con `node -v`.

### Configuración del Proyecto

Con Node.js instalado, puedes configurar el proyecto:

1. Clona el repositorio del proyecto TecCancun.
2. Navega a la carpeta del proyecto y ejecuta `npm i` para instalar las dependencias.

### Ejecución

Para iniciar la aplicación:

```
npm run dev
```

Esto lanzará el servidor de desarrollo. Accede a la aplicación en tu navegador en `localhost:PORT`, donde `PORT` es el puerto definido en tu configuración.

## Preguntas Frecuentes para Desarrolladores

**P: ¿Qué hago si `npm i` muestra errores?**

R: Asegúrate de tener la última versión de Node.js y npm. Si el problema persiste, intenta borrar la carpeta `node_modules` y el archivo `package-lock.json`, luego ejecuta `npm i` nuevamente.

**P: ¿Cómo puedo configurar variables de entorno para el desarrollo?**

R: Crea un archivo `.env` en la raíz del proyecto y define tus variables allí. Por ejemplo, `PORT=4000` para definir el puerto del servidor.

**P: ¿Dónde encuentro la documentación sobre las API?**

R: La documentación de la API está disponible en [Enlace de Documentación].

**P: ¿Cómo reporto un error o sugiero una nueva característica?**

R: Puedes reportar errores o sugerir características a través de nuestro sistema de issues en GitHub. Por favor, proporciona detalles claros y pasos para reproducir cualquier error.
