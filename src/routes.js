import { createRouter, createWebHistory } from 'vue-router'
import ElementsComponent from './components/elements/ElementsComponent.vue'
import ElementComponent from './components/element/ElementComponent.vue'

const routes = [
    { path: '/home', component: ElementsComponent },
    { path: '/description/:symbol', component: ElementComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
