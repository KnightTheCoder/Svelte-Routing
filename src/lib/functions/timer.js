import { get, writable } from "svelte/store";

export const createTimer = () => {
    let counterInterval = null;
    let ms = writable(0);
    let sec = writable(0);
    let min = writable(0);

    const startCounter = () => {
        if (counterInterval) return;

        counterInterval = setInterval(() => {
            ms.set(get(ms)+1);
            if (get(ms) % 100 == 0 && get(ms) > 0) {
                ms.set(0);
                sec.set(get(sec)+1);
            }
            if (get(sec) % 60 == 0 &&get(sec) > 0) {
                sec.set(0);
                min.set(get(min)+1);
            }
        }, 10);
    };

    const stopCounter = () => {
        clearInterval(counterInterval);
        counterInterval = null;
    };

    const resetCounter = () => {
        min.set(0);
        sec.set(0);
        ms.set(0);
    };

    return { counterInterval, ms, sec, min, startCounter, stopCounter, resetCounter }
}