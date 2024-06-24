import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { routes, guard } from './routes.ts'

console.log(routes);

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(guard);

createApp(App)
    .use(router)
    .mount('#app')


