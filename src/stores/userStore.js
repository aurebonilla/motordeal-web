// stores/userStore.js
import { defineStore } from 'pinia';
import { login, register, logout, resetPassword } from '../authService.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    error: null,
    message: null,
  }),
  actions: {
    async login(email, password) {
      try {
        this.error = null;
        const user = await login(email, password);
        this.user = user;
      } catch (error) {
        this.error = error.message;
      }
    },
    async register(email, password, cp, dni, telefono, username) {
      try {
        this.error = null;
        await register(email, password, cp, dni, telefono, username);
      } catch (error) {
        this.error = error.message;
      }
    },
    async logout() {
      try {
        await logout();
        this.user = null;
      } catch (error) {
        this.error = error.message;
      }
    },
    async resetPassword(email) {
      try {
        this.error = null;
        this.message = null;
        await resetPassword(email);
        this.message = 'Correo de restablecimiento de contraseña enviado.';
      } catch (error) {
        this.error = error.message;
      }
    },
    async checkAuth() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    }
  }
});