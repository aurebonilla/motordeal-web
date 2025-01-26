<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Contact section -->
      <section class="bg-gradient-to-b from-gray-100 to-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1">¿Tiene alguna pregunta? Contáctanos directamente</h1>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="first-name">Nombre <span class="text-red-600">*</span></label>
                  <input id="first-name" type="text" class="form-input w-full text-gray-800" placeholder="Introduce tu nombre" required />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="last-name">Apellidos <span class="text-red-600">*</span></label>
                  <input id="last-name" type="text" class="form-input w-full text-gray-800" placeholder="Introduce tus apellidos" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                  <input id="email" type="email" class="form-input w-full text-gray-800" placeholder="Introduce tu mail" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="subject">Asunto <span class="text-red-600">*</span></label>
                  <input id="subject" type="text" class="form-input w-full text-gray-800" placeholder="¿Cómo podemos ayudarte?" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="message">Mensaje</label>
                  <textarea id="message" rows="4" class="form-textarea w-full text-gray-800" placeholder="Escribe tu mensaje"></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-4">
                <div class="w-full px-3">
                  <button class="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Enviar</button>
                </div>
              </div>
              <div class="text-sm text-gray-600 mt-4">
                Al hacer clic en "enviar", usted acepta que MotorDeal almacene y procese la información personal enviada anteriormente y acepta nuestros <a class="underline" href="#0">términos y condiciones</a>, así como nuestros <a class="underline" href="#0">Política de privacidad</a>.
              </div>
            </form>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'

import Footer from './../partials/Footer.vue'

export default {
  name: 'Support',
  components: {
    Header,
    Footer,
  },
}
</script>
