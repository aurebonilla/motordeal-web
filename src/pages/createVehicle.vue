<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-gray-50">
    <!-- Header Section -->
    <Header />

    <main class="flex-grow">
      <!-- Vehicle Creation Form Section -->
      <section class="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="px-6 py-8 sm:p-10">
              <h1 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Crear Vehículo</h1>
              <!-- Formulario de creación de vehículo -->
              <form @submit.prevent="crearVehiculoHandler" class="space-y-6">
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <!-- Campo de entrada para la matrícula -->
                  <div>
                    <label for="matricula" class="block text-sm font-medium text-gray-700">Matrícula</label>
                    <input type="text" v-model="matricula" id="matricula" required
                           class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <!-- Campo de entrada para la marca -->
                  <div>
                    <label for="marca" class="block text-sm font-medium text-gray-700">Marca</label>
                    <input type="text" v-model="marca" id="marca" required
                           class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <!-- Campo de entrada para el modelo -->
                  <div>
                    <label for="modelo" class="block text-sm font-medium text-gray-700">Modelo</label>
                    <input type="text" v-model="modelo" id="modelo" required
                           class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <!-- Campo de entrada para los kilómetros -->
                  <div>
                    <label for="km" class="block text-sm font-medium text-gray-700">Kilómetros</label>
                    <input type="number" v-model="km" id="km" required
                           class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                  <!-- Campo de entrada para el precio -->
                  <div>
                    <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">€</span>
                      </div>
                      <input type="number" v-model="precio" id="precio" required
                             class="block w-full pl-7 pr-12 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                  </div>
                  <!-- Campo de entrada para el año -->
                  <div>
                    <label for="year" class="block text-sm font-medium text-gray-700">Año</label>
                    <input type="number" v-model="year" id="year" required
                           class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                  </div>
                </div>
                <!-- Botón para crear el vehículo -->
                <div class="pt-5">
                  <button type="submit"
                          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
                    Crear Vehículo
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- Mensajes de error y éxito -->
          <div class="mt-6">
            <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong class="font-bold">Error!</strong>
              <span class="block sm:inline">{{ error }}</span>
            </div>
            <div v-if="mensajeExito" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong class="font-bold">Éxito!</strong>
              <span class="block sm:inline">{{ mensajeExito }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import { useVehiculoStore } from '../stores/vehiculoStore.js';

export default {
  components: {
    Header,
  },
  data() {
    return {
      matricula: '', // Matrícula del vehículo
      marca: '', // Marca del vehículo
      modelo: '', // Modelo del vehículo
      km: '', // Kilómetros del vehículo
      precio: '', // Precio del vehículo
      year: '', // Año del vehículo
      error: null, // Mensaje de error
      mensajeExito: null, // Mensaje de éxito
    };
  },
  methods: {
    /**
     * Maneja la creación de un nuevo vehículo.
     * Llama al método crearVehiculo de la tienda de vehículos con los datos del formulario.
     * Muestra un mensaje de éxito si la creación es exitosa, o un mensaje de error si falla.
     */
    async crearVehiculoHandler() {
      this.error = null;
      this.mensajeExito = null;

      const vehiculoStore = useVehiculoStore();

      try {
        await vehiculoStore.crearVehiculo(
          this.matricula,
          this.marca,
          this.modelo,
          this.km,
          this.precio,
          this.year
        );
        this.mensajeExito = 'Vehículo creado con éxito';
        // Restablece los campos del formulario
        this.matricula = '';
        this.marca = '';
        this.modelo = '';
        this.km = '';
        this.precio = '';
        this.year = '';
      } catch (error) {
        this.error = vehiculoStore.error;
      }
    }
  }
};
</script>

<style>
.error {
  color: red;
}
.success {
  color: green;
}
</style>