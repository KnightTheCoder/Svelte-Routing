import { writable, get } from 'svelte/store';

const routes = writable([]);
const currentRoute = writable(null);
const currentPath = writable(null);

const getRouteFromPath = (path) => {
    return get(routes).find((it) => it.path == path);
};

export { routes, currentRoute, currentPath, getRouteFromPath };
