import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/line-awesome/line-awesome.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './style.css'
import './assets/Satoshi/css/satoshi.css'

const app = createApp(App)
app.use(Quasar, {
    plugins: {
    }, // import Quasar plugins and add here
  })
app.use(createPinia())
app.use(router)

app.mount('#app')
