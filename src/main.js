import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter } from './router';

createRouter();
const app = new App({
    target: document.getElementById('app')
});

export default app;
