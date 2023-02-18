import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRouter } from './routes';

const app = new App({
    target: document.getElementById('app')
});
createRouter();

export default app;
