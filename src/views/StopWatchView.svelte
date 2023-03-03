<script>
    import { createTimer } from "@/lib/functions/timer";

    let { counterInterval, ms, sec, min, startCounter, stopCounter, resetCounter } = createTimer();
</script>

<h1 class="text-center">
    Stop watch
</h1>

<h1 class="text-center">
    {$min} : {$sec} : {$ms * 10}
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
