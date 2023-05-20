import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupDirectives } from './directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setupDirectives(app)
app.mount('#app')
