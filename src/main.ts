import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'

import '@/assets/index.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(router)
  .use(pinia)
  .mount('#app')
