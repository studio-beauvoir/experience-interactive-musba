<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {goto} from "$app/navigation";

    function backToHome() {
        goto('../../')
    }
    function credits() {
        goto('../../credits')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black">
    <h1 class="text-pink-500 font-bold text-3xl">Vous avez fini !</h1>
    <p>Selon vous, les suspects sont</p>
    <ol class="list-decimal">
        {#each $selectedSuspects as suspect}
            <li>{ suspect.name }</li>
        {/each}
    </ol>
    <Button handleClick={backToHome}>Rejouer</Button>
    <Button handleClick={credits}>Crédits</Button>
</div>