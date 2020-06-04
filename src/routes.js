import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementsComponent from "./components/elements/ElementsComponent.vue"
import ElementComponent from "./components/element/ElementComponent.vue"

Vue.use(VueRouter);

const routes = [
    {path:"/home", component: ElementsComponent}, 
    {path:"/description/:symbol", component: ElementComponent}
];

const routers = new VueRouter({
    routes,
    mode: "history"
});

export default routers;