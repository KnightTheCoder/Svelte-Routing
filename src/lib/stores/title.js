import { get, writable } from 'svelte/store';

let title = writable('');

title.subscribe((value) => {
    document.title = get(title) + ' - Svelte Custom Router';
});

export { title };
