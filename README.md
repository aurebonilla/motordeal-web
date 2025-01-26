# Motordeal

Motordeal es una plataforma web que conecta compradores y vendedores de vehículos, ofreciendo un espacio dinámico y sencillo para la gestión de anuncios de compra y venta. Este proyecto utiliza Vue.js, Pinia y Firebase para garantizar un desarrollo moderno y eficiente.

## Características

- **CRUD de usuarios**: Gestiona la creación, lectura, actualización y eliminación de usuarios.
- **CRUD de vehículos**: Permite crear, listar, actualizar y eliminar vehículos.


## Tecnologías principales

- [Vue.js](https://vuejs.org/) - Framework progresivo para construir interfaces de usuario.
- [Pinia](https://pinia.vuejs.org/) - Biblioteca de manejo de estado para Vue.js.
- [Firebase](https://firebase.google.com/) - Backend as a Service que incluye base de datos en tiempo real, autenticación y hosting.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- Una cuenta de Firebase y un proyecto configurado

## Instalación

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/motordeal.git
   cd motordeal
   ```

2. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

3. Configura Firebase:

   - Crea un archivo `firebaseConfig.js` en la carpeta `src`.
   - Agrega tu configuración de Firebase en el siguiente formato:
     ```javascript
     export const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:5174](http://localhost:5174).


## Contacto

Para cualquier consulta , puedes hablarme a través del contacto que se encuentra en mi web [Bonil.la](https://bonil.la/)

