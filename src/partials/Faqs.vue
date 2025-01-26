<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-20">
          <h2 class="h2">Preguntas y Respuestas</h2>
        </div>

        <!-- Faqs -->
        <ul class="max-w-3xl mx-auto pl-12">
          <Accordion title="¿Qué tipos de vehículos puedo comprar o vender?">
            Puedes comprar o vender turismos, motocicletas y autocaravanas en nuestro sitio web.
          </Accordion>
          <Accordion title="¿Es necesario tener conocimientos de mecánica para usar el sitio?">
            No, no es necesario tener conocimientos de mecánica. Nuestro sitio está diseñado para ser fácil de usar para todos.
          </Accordion>
          <Accordion title="¿Cómo puedo contactar con el vendedor?">
            Una vez que encuentres un vehículo de tu interés, puedes contactar con el vendedor a través del formulario de contacto disponible en la página del vehículo.
          </Accordion>
          <Accordion title="¿Qué métodos de pago están disponibles?">
            Los pagos de vehículos son demasiado grandes, por tanto, la web solo sirve como intermediario entre el comprador y el vendedor. El método de pago se acordará entre ambas partes.
          </Accordion>
          <Accordion title="¿Qué debo hacer si tengo problemas con mi cuenta?">
            Si tienes problemas con tu cuenta, puedes contactar con nuestro equipo de soporte a través del formulario de contacto en la página de ayuda.
          </Accordion>
          <span class="block border-t border-gray-200" aria-hidden="true"></span>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
import Accordion from './../utils/Accordion.vue'

export default {
  name: 'Faqs',
  components: {
    Accordion,
  },
}
</script>