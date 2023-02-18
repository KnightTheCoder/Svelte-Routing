import { writable, get } from 'svelte/store'

const routes = writable([]);
const currentRoute = writable(get(routes[0]) || null);

const getRouteFromPath = path => {
    return get(routes).find(it => it.path == path);
}

export {
    routes,
    currentRoute,
    getRouteFromPath
};