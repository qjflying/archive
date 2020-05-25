/**
 * @file router
 * @author qianjing
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import test from '../views/test.vue';
import file from '../views/file.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/file/',
        component: file
    },
    {
        path: '/file/*',
        component: file
    },
    {
        path: '/test',
        component: test
    }
];

const router = new VueRouter({
    routes
});

export default router;
