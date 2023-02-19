<script>
    let count = 0;
    $: oddOrEven = count % 2 == 0 ? 'even' : 'odd';

    const increment = () => {
        count += 1;
    };

    const decrement = () => {
        if (count < 1) return;
        count -= 1;
    }

    const reset = () => {
        count = 0;
    }
</script>

<h1 class="text-center">
    Counter
</h1>

<div class="text-center">
    <h1>{count}</h1>
    <h3>{oddOrEven}</h3>
</div>

<div class="w-25 mx-auto">
    <button class="col-12 my-2 btn btn-success" on:click={increment}>+</button>
    <button class="col-12 my-2 btn btn-danger" on:click={decrement}>-</button>
    <button class="col-12 my-2 btn btn-info" on:click={reset}>Reset</button>
</div>
