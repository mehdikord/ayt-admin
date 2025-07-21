//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import { faIR, dateFaIR } from 'naive-ui/es/locales'


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global Components
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const app = createApp({
    render: () =>
        h(
            NConfigProvider,
            {
                locale: faIR,
                dateLocale: dateFaIR,
                rtl: true,
                themeOverrides: {
                    common: {
                        // fontFamily: 'Vazirmatn, Tahoma, sans-serif'
                    }
                }
            },
            {
                default: () => [h(NGlobalStyle), h(App)]
            }
        )
})


app.use(createPinia())
app.use(router)
app.use(naive)
app.mount('#app')
