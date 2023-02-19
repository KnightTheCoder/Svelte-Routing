import { currentRoute, routes } from "../stores/routing";
import { get } from "svelte/store";
import HomeView from "../views/HomeView.svelte";
import CounterView from "../views/CounterView.svelte";
import StopperView from "../views/StopperView.svelte";
import CalculatorView from "../views/CalculatorView.svelte";

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
        }
    ]);
    currentRoute.set(get(routes)[0]);
}