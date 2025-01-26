<!-- Componente para restablecer la contraseña -->
<template>
  <!-- Contenedor principal con diseño flex y overflow oculto -->
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Encabezado del sitio -->
    <Header />

    <!-- Contenido de la página -->
    <main class="grow">

      <!-- Sección con fondo degradado -->
      <section class="bg-gradient-to-b from-gray-100 to-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Encabezado de la página -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 class="h1 mb-4">¿Has olvidado tu contraseña?</h1>
              <p class="text-xl text-gray-600">Ingrese la dirección de correo electrónico que utilizó cuando se registró en su cuenta y le enviaremos un enlace por correo electrónico para restablecer su contraseña.</p>
            </div>

            <!-- Formulario de restablecimiento de contraseña -->
            <div class="max-w-sm mx-auto">
              <!-- Evento de envío del formulario que ejecuta el método handleResetPassword -->
              <form @submit.prevent="handleResetPassword">
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <!-- Campo de entrada de email -->
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                    <!-- v-model vincula el valor del input con la variable reactiva email -->
                    <input id="email" type="email" v-model="email" class="form-input w-full text-gray-800" placeholder="Introduzca su email" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <!-- Botón para enviar el formulario y solicitar el restablecimiento -->
                    <button type="submit" class="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Enviar</button>
                  </div>
                </div>
                <!-- Mostrar mensaje de éxito si existe -->
                <div v-if="message" class="text-green-600 text-center mt-4">{{ message }}</div>
                <!-- Mostrar mensaje de error si existe -->
                <div v-if="error" class="text-red-600 text-center mt-4">{{ error }}</div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- Pie de página del sitio -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'; // Componente del encabezado
import Footer from './../partials/Footer.vue'; // Componente del pie de página
import { useUserStore } from '../stores/userStore.js'; // Acceso al store de usuario

export default {
  name: 'ResetPassword', // Nombre del componente
  components: {
    Header, // Registro del componente Header
    Footer  // Registro del componente Footer
  },
  data() {
    return {
      email: '' // Variable reactiva para almacenar el email ingresado por el usuario
    };
  },
  computed: {
    // Propiedad computada para obtener el mensaje de error desde el store de usuario
    error() {
      const userStore = useUserStore();
      return userStore.error; // Retorna el mensaje de error si existe
    },
    // Propiedad computada para obtener el mensaje de éxito desde el store de usuario
    message() {
      const userStore = useUserStore();
      return userStore.message; // Retorna el mensaje de éxito si existe
    }
  },
  methods: {
    // Método para manejar la solicitud de restablecimiento de contraseña
    async handleResetPassword() {
      const userStore = useUserStore(); // Accede al store de usuario
      await userStore.resetPassword(this.email); // Llama al método resetPassword del store con el email ingresado
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
.form-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.error {
  color: red;
}
</style>