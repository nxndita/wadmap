import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import VTypical from 'vue-typical'


import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.config.productionTip = false
app.use(router).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAjnoiL_PASCr0AG9l4LU00PUokxfFC28A',
        libraries : ["places" , "visualization"]
    },
    autobindAllEvents: true,
}).use(VTypical).mount('#app')
// createApp(App).use(router).mount('#app')

