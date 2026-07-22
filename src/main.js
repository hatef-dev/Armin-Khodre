import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import persianDigits from "./directives/persianDigits";

const app = createApp(App)

app.use(createPinia())
app.directive("persian-digits", persianDigits);
app.use(router)

app.mount('#app')
