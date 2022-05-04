// @ts-ignore
import App from './App.vue'
const images = require.context('./images', true)
const imagePath = (name: string) => images(name)
import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.mount('#app')

const user = { id: 1, name: 'Mark' }
