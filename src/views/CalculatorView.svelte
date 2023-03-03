<script>
    import CalculatorButton from '@/lib/components/CalculatorButton.svelte';

    let displayedCalculation = '';
    let buttons = [
        ['(', ')', '+/-', 'C'],
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];

    const handleUserInput = () => {
        let character = displayedCalculation.charAt(
            displayedCalculation.length - 1
        );

        if (['=', 'C'].includes(character) || buttons.every((arr) => arr.every((it) => character != it))) {
            displayedCalculation = displayedCalculation.slice(
                0,
                displayedCalculation.length - 1
            );
        }

        switch(character) {
            case '=':
                calculate();
                break;

            case '+/-':
                togglePolarity();
                break;

            case 'C':
                clear();
                break;

            default:
                break;
        }
    };

    const click = (event) => {
        displayedCalculation += event.detail.value;
    };

    const clear = () => {
        displayedCalculation = '';
    };

    const calculate = () => {
        displayedCalculation = eval(displayedCalculation).toString();
    };

    const togglePolarity = () => {
        if (displayedCalculation.charAt(0) == '-') {
            displayedCalculation = displayedCalculation.replace(/^\-/, '');
        } else {
            displayedCalculation = '-' + displayedCalculation;
        }
    };
</script>

<h1 class="text-center">
    Calculator
</h1>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<table class="w-25 mx-auto" on:keydown={e => e.key == 'Enter' ? calculate() : null}>
    <tr>
        <td colspan="4">
            <input
                class="form-control bg-dark text-white text-end"
                bind:value={displayedCalculation}
                on:input={handleUserInput}
                type="text"
            />
        </td>
    </tr>

    {#each buttons as btn (btn)}
        <tr>
            {#each btn as value (value)}
                <td class="w-25">
                    <CalculatorButton
                        {value}
                        on:click={click}
                        on:clear={clear}
                        on:calculate={calculate}
                        on:togglePolarity={togglePolarity}
                    />
                </td>
            {/each}
        </tr>
    {/each}
</table>
