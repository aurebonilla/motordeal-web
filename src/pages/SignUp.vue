<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <section class="bg-gradient-to-b from-gray-100 to-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 class="h1">¡Empieza aquí tu experiencia en MotorDeal!</h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <form @submit.prevent="signUp">
                <!-- Nombre de Usuario -->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="name">Nombre de Usuario <span class="text-red-600">*</span></label>
                    <input id="name" type="text" v-model="name" class="form-input w-full text-gray-800" placeholder="Introduce nombre" required />
                  </div>
                </div>
                <!-- Email -->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                    <input id="email" type="email" v-model="email" class="form-input w-full text-gray-800" placeholder="Introduce correo electrónico" required />
                  </div>
                </div>
                <!-- Contraseña -->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="password">Contraseña <span class="text-red-600">*</span></label>
                    <input id="password" type="password" v-model="password" class="form-input w-full text-gray-800" placeholder="Introduce contraseña" required />
                  </div>
                </div>
                <!-- DNI -->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="dni">DNI <span class="text-red-600">*</span></label>
                    <input id="dni" type="text" v-model="dni" pattern="[0-9]{8}[A-Za-z]{1}" minlength="9" maxlength="9" class="form-input w-full text-gray-800" placeholder="Debe poner 8 números y una letra" required />
                  </div>
                </div>
                <!-- Código Postal -->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="cp">Código postal <span class="text-red-600">*</span></label>
                    <input id="cp" type="number" v-model="cp" class="form-input w-full text-gray-800" placeholder="Introduce código postal" required />
                  </div>
                </div>
                <!-- Número de Teléfono -->
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label class="block text-gray-800 text-sm font-medium mb-1" for="telefono">Número de teléfono <span class="text-red-600">*</span></label>
                    <input id="telefono" type="number" v-model="telefono" class="form-input w-full text-gray-800" placeholder="Introduce número de teléfono español" required />
                  </div>
                </div>
                <!-- Botón de Registro -->
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button type="submit" class="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Registrar</button>
                  </div>
                </div>
                <!-- Mensaje de Error -->
                <transition name="shake">
                  <div v-if="error" class="text-red-600 text-center mt-4">{{ error }}</div>
                </transition>
              </form>
              <!-- Alternativa de Registro con Google -->
              <div class="flex items-center my-6">
                <div class="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
                <div class="text-gray-600 italic">O puedes...</div>
                <div class="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
              </div>
              <form>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full px-3">
                    <button class="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                      <svg class="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                      </svg>
                      <span class="flex-auto pl-16 pr-8 -ml-16">Continuar con Google</span>
                    </button>
                  </div>
                </div>
              </form>
              <!-- Enlace a Iniciar Sesión -->
              <div class="text-gray-600 text-center mt-6">
                ¿Ya tienes cuenta? <router-link to="/signin" class="text-blue-600 hover:underline transition duration-150 ease-in-out">Inicia Sesión</router-link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import { useUserStore } from '../stores/userStore.js';

export default {
  name: 'SignUp',
  components: {
    Header,
  },
  data() {
    return {
      name: '', // Nombre de usuario
      email: '', // Correo electrónico del usuario
      password: '', // Contraseña del usuario
      dni: '', // DNI del usuario
      cp: '', // Código postal del usuario
      telefono: '', // Número de teléfono del usuario
    };
  },
  computed: {
    error() {
      // Obtiene el mensaje de error de la tienda de usuario
      const userStore = useUserStore();
      return userStore.error;
    }
  },
  methods: {
    /**
     * Registra un nuevo usuario.
     * Llama al método register de la tienda de usuario con los datos del formulario.
     * Redirige a la página de inicio de sesión si el registro es exitoso.
     */
    async signUp() {
      const userStore = useUserStore();
      await userStore.register(this.email, this.password, this.cp, this.dni, this.telefono, this.name);
      if (!userStore.error) {
        this.$router.push('/about'); // Redirigir a la página de inicio de sesión
      }
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para SignUp.vue */
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