import {
    currentPath,
    currentRoute,
    getRouteFromPath,
    routes
} from '@/lib/stores/routing';
import HomeView from '@/views/HomeView.svelte';
import CounterView from '@/views/CounterView.svelte';
import StopWatchView from '@/views/StopWatchView.svelte';
import CalculatorView from '@/views/CalculatorView.svelte';
import PageNotFoundView from '@/views/PageNotFoundView.svelte';
import MineSweeperStartView from '@/views/MineSweeperStartView.svelte';
import MineSweeperView from '@/views/MineSweeperView.svelte';

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
            path: '/stopwatch',
            name: 'stopwatch',
            component: StopWatchView
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: CalculatorView
        },
        {
            path: '/mine-start',
            name: 'mine-start',
            component: MineSweeperStartView
        },
        {
            path: '/mine-game',
            name: 'mine-game',
            component: MineSweeperView
        },
        {
            path: '/error',
            name: 'error',
            component: PageNotFoundView
        }
    ]);

    currentPath.subscribe(() => {
        let route = getRouteFromPath(window.location.hash.replace(/^\#/, '/'));
        if (route) {
            currentRoute.set(getRouteFromPath(route.path));
        } else if (window.location.hash == '') {
            currentRoute.set(getRouteFromPath('/'));
        } else {
            currentRoute.set(getRouteFromPath('/error'));
        }
    });
};
