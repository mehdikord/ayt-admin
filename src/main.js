//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/fa-IR'
import quasarIconSet from 'quasar/icon-set/mdi-v7'
// Import icon libraries
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/dist/quasar.css'
import '@/assets/css/font.css'


// Import Quasar css




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global Components
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const app = createApp(App);



app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,
})


app.mount('#app')
