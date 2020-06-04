import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementsComponent from "./components/elements/ElementsComponent.vue"

Vue.use(VueRouter);

const routes = [
    {path:"/home", component: ElementsComponent}
];

const routers = new VueRouter({
    routes,
    mode: "history"
});

export default routers;