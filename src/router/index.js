import { currentRoute, getRouteFromPath, routes } from "../stores/routing";
import HomeView from "../views/HomeView.svelte";
import CounterView from "../views/CounterView.svelte";
import StopperView from "../views/StopperView.svelte";
import CalculatorView from "../views/CalculatorView.svelte";
import PageNotFoundView from "../views/PageNotFoundView.svelte";

export const createRouter = () => {
    routes.set([
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/counter',
            name: 'counter',
            component: CounterView
        },
        {
            path: '/stopper',
            name: 'stopper',
            component: StopperView
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: CalculatorView
        },
        {
            path: '/error',
            name: 'error',
            component: PageNotFoundView
        }
    ]);

    let route = getRouteFromPath(window.location.hash.replace(/^\#/, '/'));
    if (route) {
        currentRoute.set(
            getRouteFromPath(route.path)
        );
    } else if (window.location.hash == '') {
        currentRoute.set(
            getRouteFromPath('/')
        );
    } else {
        currentRoute.set(
            getRouteFromPath('/error')
        );
    }
    
}