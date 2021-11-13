import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import VTypical from 'vue-typical'

library.add(faUserSecret)
library.add(faSearch)

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.config.productionTip = false
app.use(router).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAjnoiL_PASCr0AG9l4LU00PUokxfFC28A',
        libraries : ["places" , "visualization"]
    },
    autobindAllEvents: true,
}).use(VTypical).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
// createApp(App).use(router).mount('#app')

