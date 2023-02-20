<script>
    let counterInterval = null;
    let ms = 0;
    let sec = 0;
    let min = 0;

    const startCounter = () => {
        if (counterInterval) return;

        counterInterval = setInterval(() => {
            ms++;
            if (ms % 100 == 0 && ms > 0) {
                ms = 0;
                sec++;
            }
            if (sec % 60 == 0 && sec > 0) {
                sec = 0;
                min++;
            }
        }, 10);
    };

    const stopCounter = () => {
        clearInterval(counterInterval);
        counterInterval = null;
    };

    const resetCounter = () => {
        ms = sec = min = 0;
    };
</script>

<h1 class="text-center">Stopper</h1>

<h1 class="text-center">
    {min} : {sec} : {ms * 10}
</h1>

<div class="w-25 mx-auto">
    <button
        class="w-100 my-2 btn btn-success"
        on:click={startCounter}>Start</button
    >
    <button
        class="w-100 my-2 btn btn-danger"
        on:click={stopCounter}>Stop</button
    >
    <button
        class="w-100 my-2 btn btn-info"
        disabled={counterInterval}
        on:click={resetCounter}>Reset</button
    >
</div>
