import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index'
import About from '~/pages/about'
import Test from '~/pages/test'

Vue.use(Router)

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
    const options = routerOptions || createDefaultRouter(ssrContext).options;
    const hostname = ssrContext ? ssrContext.req.headers.host : location.host;
    console.log(hostname)
    let routesDynamic = [];
    if(hostname.split('.').length === 2) {
        routesDynamic = [
            {
                path: '/',
                name: 'home',
                component: Index,
            },
            {
                path: '/about',
                name: 'about',
                component: About,
            }
        ]
    } else {
        routesDynamic = [
            {
                path: '/',
                name: 'home-test',
                component: Test,
            }
        ]
    }

    return new Router({
        ...options,
        // routes: [
        //     {
        //         path: '/',
        //         name: 'home',
        //         component: Index,
        //     },
        //     {
        //         path: '/about',
        //         name: 'about',
        //         component: About,
        //     }
        // ],
        routes: [...routesDynamic]
        // routes: options.routes
    });
}