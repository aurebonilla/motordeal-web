<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-gray-50">
    <!-- Header Section -->
    <Header />

    <main class="flex-grow">
      <!-- Vehicles List Section -->
      <section class="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-white shadow-xl rounded-lg overflow-hidden">
            <div class="px-6 py-8 sm:p-10">
              <h1 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Mis Vehículos</h1>
              <div v-if="error" class="text-red-600 text-center mb-4">{{ error }}</div>
              <div v-if="loading" class="text-center mb-4">Cargando...</div>
              <div v-if="!loading && vehiculos.length === 0" class="text-center mb-4">No tienes vehículos registrados.</div>
              <div v-if="!loading && vehiculos.length > 0" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="vehiculo in vehiculos" :key="vehiculo.id" :class="{ 'updated': vehiculo.id === vehiculoEditadoId }" class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                  <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">{{ vehiculo.matricula }}</h4>
                  <button @click="toggleDetalles(vehiculo.id)" class="mt-4 btn text-white bg-green-600 hover:bg-green-700 w-full transition duration-300 ease-in-out transform hover:scale-105">
                    {{ vehiculoSeleccionadoId === vehiculo.id ? 'Cerrar' : 'Ver Detalles' }}
                  </button>
                  <div v-if="vehiculo.id === vehiculoSeleccionadoId" class="mt-4">
                    <p class="text-gray-600">Marca: {{ vehiculo.marca }}</p>
                    <p class="text-gray-600">Modelo: {{ vehiculo.modelo }}</p>
                    <p class="text-gray-600">Kilómetros: {{ vehiculo.km }}</p>
                    <p class="text-gray-600">Precio: {{ vehiculo.precio }} €</p>
                    <p class="text-gray-600">Año: {{ vehiculo.year }}</p>
                  </div>
                  <button @click="abrirModalEditar(vehiculo)" class="mt-4 btn text-white bg-blue-600 hover:bg-blue-700 w-full transition duration-300 ease-in-out transform hover:scale-105">Editar</button>
                  <button @click="eliminarVehiculoHandler(vehiculo.id)" class="mt-4 btn text-white bg-red-600 hover:bg-red-700 w-full transition duration-300 ease-in-out transform hover:scale-105">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Edit Vehicle Modal -->
    <div v-if="mostrarModalEditar" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-xl">
        <h2 class="text-2xl font-bold mb-4">Editar Vehículo</h2>
        <form @submit.prevent="editarVehiculoHandler">
          <div class="mb-4">
            <label for="km" class="block text-sm font-medium text-gray-700">Kilómetros</label>
            <input type="number" v-model="vehiculoEditar.km" id="km" required
                   class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
            <input type="number" v-model="vehiculoEditar.precio" id="precio" required
                   class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div class="mb-4">
            <label for="year" class="block text-sm font-medium text-gray-700">Año</label>
            <input type="number" v-model="vehiculoEditar.year" id="year" required
                   class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div class="flex justify-end">
            <button type="button" @click="cerrarModalEditar" class="btn text-gray-600 bg-gray-200 hover:bg-gray-300 mr-2">Cancelar</button>
            <button type="submit" class="btn text-white bg-blue-600 hover:bg-blue-700">Guardar</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './../partials/Header.vue';
import Footer from './../partials/Footer.vue';
import { useVehiculoStore } from '../stores/vehiculoStore.js';

export default {
  name: 'MisVehicles', // Nombre del componente
  components: {
    Header, // Componente del encabezado
    Footer  // Componente del pie de página
  },
  data() {
    return {
      error: null, // Mensaje de error
      loading: true, // Estado de carga
      mostrarModalEditar: false, // Estado para mostrar/ocultar el modal de edición
      vehiculoEditar: {
        id: '', // ID del vehículo a editar
        km: '', // Kilómetros del vehículo a editar
        precio: '', // Precio del vehículo a editar
        year: '' // Año del vehículo a editar
      },
      vehiculoEditadoId: null, // ID del vehículo que ha sido editado
      vehiculoSeleccionadoId: null // ID del vehículo seleccionado para ver detalles
    };
  },
  computed: {
    vehiculos() {
      // Obtiene la lista de vehículos desde la tienda de vehículos
      const vehiculoStore = useVehiculoStore();
      return vehiculoStore.vehiculos;
    }
  },
  methods: {
    /**
     * Carga la lista de vehículos del usuario.
     * Llama al método listarVehiculos de la tienda de vehículos.
     * Maneja el estado de carga y los posibles errores.
     */
    async cargarVehiculos() {
      const vehiculoStore = useVehiculoStore();
      try {
        this.loading = true;
        this.error = null;
        await vehiculoStore.listarVehiculos();
      } catch (error) {
        this.error = vehiculoStore.error;
      } finally {
        this.loading = false;
      }
    },
    /**
     * Elimina un vehículo.
     * Llama al método eliminarVehiculo de la tienda de vehículos.
     * @param {string} id - ID del vehículo a eliminar.
     */
    async eliminarVehiculoHandler(id) {
      const vehiculoStore = useVehiculoStore();
      try {
        this.error = null;
        await vehiculoStore.eliminarVehiculo(id);
      } catch (error) {
        this.error = vehiculoStore.error;
      }
    },
    /**
     * Abre el modal de edición de vehículo.
     * @param {Object} vehiculo - Objeto del vehículo a editar.
     */
    abrirModalEditar(vehiculo) {
      this.vehiculoEditar = { ...vehiculo };
      this.mostrarModalEditar = true;
    },
    /**
     * Cierra el modal de edición de vehículo.
     */
    cerrarModalEditar() {
      this.mostrarModalEditar = false;
    },
    /**
     * Edita un vehículo.
     * Llama al método editarVehiculo de la tienda de vehículos.
     * Maneja el estado de edición y los posibles errores.
     */
    async editarVehiculoHandler() {
      const vehiculoStore = useVehiculoStore();
      try {
        this.error = null;
        await vehiculoStore.editarVehiculo(
          this.vehiculoEditar.id,
          this.vehiculoEditar.km,
          this.vehiculoEditar.year,
          this.vehiculoEditar.precio
        );
        this.vehiculoEditadoId = this.vehiculoEditar.id;
        this.cerrarModalEditar();
        setTimeout(() => {
          this.vehiculoEditadoId = null;
        }, 2000); // Elimina la clase de animación después de 2 segundos
      } catch (error) {
        this.error = vehiculoStore.error;
      }
    },
    /**
     * Alterna la visualización de los detalles de un vehículo.
     * @param {string} id - ID del vehículo a mostrar/ocultar detalles.
     */
    toggleDetalles(id) {
      if (this.vehiculoSeleccionadoId === id) {
        this.vehiculoSeleccionadoId = null;
      } else {
        this.vehiculoSeleccionadoId = id;
      }
    }
  },
  mounted() {
    // Carga la lista de vehículos cuando el componente se monta
    this.cargarVehiculos();
  }
};
</script>

<style scoped>
/* Estilos específicos para misVehicles.vue */
.updated {
  animation: highlight 2s ease-in-out;
}

@keyframes highlight {
  0% {
    background-color: rgb(150, 255, 194);
  }
  100% {
    background-color: white;
  }
}

.btn {
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  transform: scale(1.05);
}

/* Transición para el botón "Ver Detalles"/"Cerrar" */
.nested-enter-active .btn,
.nested-leave-active .btn {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .btn,
.nested-leave-to .btn {
  transform: translateX(30px);
  opacity: 0;
}
</style>