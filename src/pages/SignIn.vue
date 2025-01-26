<!-- Componente de inicio de sesión -->
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
              <h1 class="h1">¡Bienvenido de Nuevo!</h1>
            </div>

            <!-- Formulario de inicio de sesión -->
            <div class="max-w-sm mx-auto">
              <!-- Evento de envío del formulario que ejecuta el método signIn -->
              <form @submit.prevent="signIn">
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <!-- Campo de entrada de email -->
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email</label>
                    <!-- v-model vincula el valor del input con la variable reactiva email -->
                    <input id="email" type="email" v-model="email" class="form-input w-full text-gray-800" placeholder="Introduce el email de tu cuenta" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <div class="flex justify-between">
                      <label class="block text-gray-800 text-sm font-medium mb-1" for="password">Contraseña</label>
                      <!-- Enlace a la página de restablecimiento de contraseña -->
                      <router-link to="/reset-password" class="text-sm font-medium text-blue-600 hover:underline">¿Has olvidado tu contraseña?</router-link>
                    </div>
                    <!-- Campo de entrada de contraseña -->
                    <!-- v-model vincula el valor del input con la variable reactiva password -->
                    <input id="password" type="password" v-model="password" class="form-input w-full text-gray-800" placeholder="Introduce tu contraseña" required />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <div class="flex justify-between">
                      <!-- Checkbox de "Recordarme" -->
                      <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox" />
                        <span class="text-gray-600 ml-2">Recordarme</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <!-- Botón para enviar el formulario e iniciar sesión -->
                    <button type="submit" class="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Iniciar Sesión</button>
                  </div>
                </div>
                <!-- Transición para mostrar errores con animación -->
                <transition name="shake">
                  <!-- Mensaje de error si existe -->
                  <div v-if="error" class="text-red-600 text-center mt-4">{{ error }}</div>
                </transition>
              </form>


              <!-- Enlace para registrarse si no tiene cuenta -->
              <div class="text-gray-600 text-center mt-6">
                ¿No tienes cuenta todavía? <router-link to="/signup" class="text-blue-600 hover:underline transition duration-150 ease-in-out">Registrarse</router-link>
              </div>
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
  name: 'SignIn', // Nombre del componente
  components: {
    Header, // Registro del componente Header
    Footer  // Registro del componente Footer
  },
  data() {
    return {
      email: '',    // Variable reactiva para almacenar el email ingresado por el usuario
      password: '', // Variable reactiva para almacenar la contraseña ingresada
    };
  },
  computed: {
    // Propiedad computada para obtener el mensaje de error desde el store de usuario
    error() {
      const userStore = useUserStore();
      return userStore.error; // Retorna el mensaje de error si existe
    }
  },
  methods: {
    // Método para manejar el inicio de sesión
    async signIn() {
      const userStore = useUserStore(); // Accede al store de usuario
      await userStore.login(this.email, this.password); // Llama al método login del store con los datos ingresados
      if (!userStore.error) {
        // Si no hay error, redirige a la página de vehículos
        this.$router.push('/misVehicles');
      }
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
  margin-top: 10px;
}
/* Animación para la transición 'shake' */
.shake-enter-active, .shake-leave-active {
  animation: shake 0.5s;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>