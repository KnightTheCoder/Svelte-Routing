<script>
    import { createEventDispatcher } from 'svelte';

    export let value = '';

    const dispatch = createEventDispatcher();

    const click = () => {
        switch (value) {
            case '=':
                dispatch('calculate');
                break;

            case '+/-':
                dispatch('togglePolarity');
                break;

            case 'C':
                dispatch('clear');
                break;

            default:
                dispatch('click', {
                    value: value
                });
                break;
        }
    };
</script>

<button
    class="btn btn-secondary w-100"
    on:click={click}
>
    {value}
</button>
