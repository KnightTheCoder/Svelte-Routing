<script>
    import CalculatorButton from '../lib/CalculatorButton.svelte';

    let displayedCalculation = '';
    let buttons = [
        ['(', ')', '+/-', 'AC'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];

    const click = (event) => {
        displayedCalculation += event.detail.value;
    };

    const clear = () => {
        displayedCalculation = '';
    };

    const calculate = () => {
        displayedCalculation = eval(displayedCalculation);
    };

    const togglePolarity = () => {
        if (displayedCalculation.charAt(0) == '-') {
            displayedCalculation = displayedCalculation.replace(/^\-/, '');
        } else {
            displayedCalculation = '-' + displayedCalculation;
        }
    }
</script>

<table class="table bg-secondary text-white w-25 mx-auto">
    <tr>
        <td colspan="4">
            <input
                class="form-control bg-dark text-white"
                bind:value={displayedCalculation}
                type="text"
            />
        </td>
    </tr>

    {#each buttons as btn}
        <tr>
            {#each btn as value}
                <CalculatorButton
                    {value}
                    on:click={click}
                    on:clear={clear}
                    on:calculate={calculate}
                    on:togglePolarity={togglePolarity}
                />
            {/each}
        </tr>
    {/each}
</table>
