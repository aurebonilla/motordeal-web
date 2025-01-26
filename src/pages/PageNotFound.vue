<!-- Componente para la página de error 404 -->
<template>
  <!-- Contenedor principal con diseño flexible y ocultación de desbordamiento -->
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Encabezado del sitio -->
    <Header />

    <!-- Contenido de la página -->
    <main class="grow">

      <!-- Ilustración detrás del contenido -->
      <div class="absolute left-1/2 transform -translate-x-1/2 -mb-64 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <!-- Gráfico SVG decorativo -->
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Definición de un degradado lineal -->
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stop-color="#FFF" offset="0%" />
              <stop stop-color="#EAEAEA" offset="77.402%" />
              <stop stop-color="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <!-- Uso del degradado en formas -->
          <g fill="url(#illustration-01)" fill-rule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <!-- Contenedor del mensaje principal -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div class="max-w-3xl mx-auto text-center">
            <!-- Mensaje de error 404 -->
            <h1 class="h1 mb-4" data-aos="zoom-y-out">¡Oh, no! Esta página no existe</h1>
            <div class="mt-8">
              <!-- Botón para regresar a la página de inicio -->
              <router-link to="/" class="btn text-white bg-blue-600 hover:bg-blue-700">Volver al inicio</router-link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Pie de página del sitio -->
    <Footer />

  </div>
</template>

<script>
// Importación de componentes necesarios
import Header from './../partials/Header.vue'; // Componente del encabezado del sitio
import Footer from './../partials/Footer.vue'; // Componente del pie de página del sitio

export default {
  name: 'PageNotFound', // Nombre del componente
  components: {
    Header, // Registro del componente Header
    Footer, // Registro del componente Footer
  },
  // Este componente no define variables de estado, props ni métodos adicionales
};
</script>