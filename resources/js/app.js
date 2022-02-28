/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './route';

import 'vuejs-datatable/dist/themes/bootstrap-4.esm';
import { VuejsDatatableFactory } from 'vuejs-datatable';

Vue.use( VuejsDatatableFactory );
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

import App from './components/App';
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
