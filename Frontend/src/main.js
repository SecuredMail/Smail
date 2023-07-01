import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
 


createApp(App).use(store).use(router).use(VCalendar).mount('#app')
AOS.init()
