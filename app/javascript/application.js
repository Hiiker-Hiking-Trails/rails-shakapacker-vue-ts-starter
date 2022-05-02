/* eslint no-console:0 */
const images = require.context('./images', true)
const imagePath = (name) => images(name, true)
import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')