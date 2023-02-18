import { routes } from "../stores/routing";
import CounterView from "../views/CounterView.svelte";
import StopperView from "../views/StopperView.svelte";

export const createRouter = () => {
    routes.set([
        {
            path: '/',
            name: 'home',
            component: null
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
        }
    ]);
}