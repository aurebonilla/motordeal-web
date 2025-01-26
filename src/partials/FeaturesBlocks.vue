<template>
  <section class="relative">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4">Somos de confianza para las mejores marcas de automóviles</h2>
          <p class="text-xl text-gray-600">En MotorDeal, conectamos a fabricantes, concesionarios y particulares con soluciones eficientes y seguras para la compraventa de vehículos</p>
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

          <!-- 1st item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="../images/audi.webp" alt="Audi Logo" class="w-16 h-16 p-1 -mt-1 mb-2" />
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Audi</h4>
          </div>

          <!-- 2nd item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="../images/mercedes.png" alt="Mercedes Logo" class="w-16 h-16 p-1 -mt-1 mb-2" />
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Mercedes</h4>
          </div>

          <!-- 3rd item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="../images/bmw.png" alt="BMW Logo" class="w-16 h-16 p-1 -mt-1 mb-2" />
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">BMW</h4>
          </div>

          <!-- 4th item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="../images/jaguar.jpg" alt="Jaguar Logo" class="w-16 h-16 p-1 -mt-1 mb-2" />
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Jaguar</h4>
          </div>

          <!-- 5th item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="../images/wolks.png" alt="Volkswagen Logo" class="w-16 h-16 p-1 -mt-1 mb-2" />
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Volkswagen</h4>
          </div>

          <!-- 6th item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img src="../images/skoda.webp" alt="SKoda Logo" class="w-16 h-16 p-1 -mt-1 mb-2" />
            <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Skoda</h4>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesBlocks',
}
</script>