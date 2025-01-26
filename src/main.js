import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia';

import 'aos/dist/aos.css';
import './css/style.css'

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount('#app');
