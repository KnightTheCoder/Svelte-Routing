import { writable, get } from 'svelte/store'

const routes = writable([]);
const currentRoute = writable(get(routes[0]) || null);

export {
    routes,
    currentRoute
}