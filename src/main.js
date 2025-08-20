//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import methods from "@/includes/methods.js";
import router from './router'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/fa-IR'
import quasarIconSet from 'quasar/icon-set/mdi-v7'
// Import icon libraries
import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/dist/quasar.css'
import '@/assets/css/font.css'
import {Notify} from 'quasar'


// Import Quasar css

import Global_Validation_Errors from "@/components/globals/Global_Validation_Errors.vue";



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global Components
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const app = createApp(App);
app.component('global_validation_errors',Global_Validation_Errors)



app.use(createPinia())
app.use(router)
app.use(Quasar, {
    plugins: {
        Notify
    }, // import Quasar plugins and add here
    lang: quasarLang,
    iconSet: quasarIconSet,
    notify: {

    },
})

app.mixin(methods);



app.mount('#app')
