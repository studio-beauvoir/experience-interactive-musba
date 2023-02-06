<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {goto} from "$app/navigation";

    function goBackToHome() {
        goto('/')
    }

    function goToCredits() {
        goto('/credits')
    }

    async function saveResultsToDatabase() {
        await fetch('/api/stats', {
            method: 'POST',
            body: JSON.stringify({
                selectedSuspects: $selectedSuspects.map(suspect => suspect.id)
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    saveResultsToDatabase()
</script>

<section class="flex flex-col items-center justify-center h-full bg-black text-yellow gap-10">
    <article class="flex flex-col px-6">
        <h2 class="text-h2">Ooooh...</h2>
        <h1 class="text-h1 ml-10">Bravo!</h1>
    </article>

    <p class="text-p text-center px-6">Vous avez eu une piste<br> bien intéressante !</p>

    <article class="w-full flex gap-4 items-center">
        <section class="flex flex-col gap-2 w-full">
            <div class="bg-brown h-px"></div>
            <div class="bg-brown h-px mr-3"></div>
            <div class="bg-brown h-px"></div>
        </section>

        <section class="text-center">
            <p class="text-label">Parcours</p>
            <p class="text-h1">A</p>
        </section>

        <section class="flex flex-col gap-2 w-full">
            <div class="bg-brown h-px"></div>
            <div class="bg-brown h-px ml-3"></div>
            <div class="bg-brown h-px"></div>
        </section>
    </article>

    <ol class="flex gap-4 justify-between w-full px-6">
        {#each $selectedSuspects as suspect}
            <li class="flex flex-col gap-2 items-center">
                <img alt=" "
                     class="aspect-square border border-yellow"
                     src="/images/figures/{suspect.id}.jpg">
                <span class="text-label text-white">Complice</span>
            </li>
        {/each}
    </ol>

    <section class="flex w-full justify-between px-6">
        <Button handleClick={goToCredits}>Crédits</Button>
        <Button handleClick={goBackToHome}>Rejouer</Button>
    </section>
</section>