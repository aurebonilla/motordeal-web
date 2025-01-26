// stores/vehiculoStore.js
import { defineStore } from 'pinia';
import { listarVehiculosPorUsuario, crearVehiculo, eliminarVehiculo, leerVehiculos, leerVehiculoPorId, actualizarVehiculo, editarVehiculo } from '../vehiculoService.js';

export const useVehiculoStore = defineStore('vehiculo', {
  state: () => ({
    vehiculos: [],
    error: null,
    loading: false,
  }),
  actions: {
    async listarVehiculos() {
      try {
        this.loading = true;
        this.error = null;
        this.vehiculos = await listarVehiculosPorUsuario();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async crearVehiculo(matricula, marca, modelo, km, precio, year) {
      try {
        this.error = null;
        const vehiculo = await crearVehiculo(matricula, marca, modelo, km, precio, year);
        this.vehiculos.push(vehiculo);
      } catch (error) {
        this.error = error.message;
      }
    },
    async eliminarVehiculo(id) {
      try {
        this.error = null;
        await eliminarVehiculo(id);
        this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.id !== id);
      } catch (error) {
        this.error = error.message;
      }
    },
    async leerVehiculos() {
      try {
        this.loading = true;
        this.error = null;
        this.vehiculos = await leerVehiculos();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async leerVehiculoPorId(id) {
      try {
        this.error = null;
        return await leerVehiculoPorId(id);
      } catch (error) {
        this.error = error.message;
      }
    },
    async actualizarVehiculo(id, datosActualizados) {
      try {
        this.error = null;
        const vehiculoActualizado = await actualizarVehiculo(id, datosActualizados);
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.id === id);
        if (index !== -1) {
          this.vehiculos[index] = vehiculoActualizado;
        }
      } catch (error) {
        this.error = error.message;
      }
    },
    async editarVehiculo(id, km, year, precio) {
      try {
        this.error = null;
        const vehiculoEditado = await editarVehiculo(id, km, year, precio);
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.id === id);
        if (index !== -1) {
          this.vehiculos[index] = { ...this.vehiculos[index], km, year, precio };
        }
      } catch (error) {
        this.error = error.message;
      }
    }
  }
});