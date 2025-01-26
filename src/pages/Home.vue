<!-- Componente principal de la página de inicio -->
<template>
  <!-- Contenedor principal -->
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Encabezado del sitio -->
    <Header />

    <!-- Contenido de la página -->
    <main class="grow">
      <!-- Secciones de la página -->
      <HeroHome />
      <FeaturesBlocks />
      <TestimonialsCarousel />
      <Faqs />
    </main>

    <!-- Pie de página del sitio -->
    <Footer />
  </div>
</template>

<script>
  // Importación de componentes necesarios
  import Header from './../partials/Header.vue'                   // Componente del encabezado del sitio
  import HeroHome from './../partials/HeroHome.vue'               // Sección principal o hero de la página de inicio
  import FeaturesBlocks from './../partials/FeaturesBlocks.vue'   // Sección de bloques de características del producto o servicio
  import Footer from './../partials/Footer.vue'                   // Componente del pie de página del sitio
  import Faqs from './../partials/Faqs.vue'                       // Sección de preguntas frecuentes
  import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue' // Carrusel de testimonios de clientes

  export default {
    name: 'Home',  // Nombre del componente
    components: {
      Header,                 // Registro del componente Header
      HeroHome,               // Registro del componente HeroHome
      FeaturesBlocks,         // Registro del componente FeaturesBlocks
      Footer,                 // Registro del componente Footer
      Faqs,                   // Registro del componente Faqs
      TestimonialsCarousel    // Registro del componente TestimonialsCarousel
    }
    // Este componente actúa como contenedor y no tiene estado propio, variables reactivas o métodos
  }
</script>

<!-- Estilos específicos para este componente (no se definen en este caso) -->
<style scoped>
</style>