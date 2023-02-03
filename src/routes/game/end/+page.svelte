<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";

    async function doPost() {
        const res = await fetch('/api/stats', {
            method: 'POST',
            body: JSON.stringify({
                selectedSuspects: $selectedSuspects.map(suspect => suspect.id)
            }),
            headers: {
                'content-type': 'application/json'
            }
        })

        const json = await res.json()
        const result = JSON.stringify(json)
    }

    doPost()
</script>

<div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-pink-500 font-bold text-3xl">Vous avez fini !</h1>
    <p>Selon vous, les suspects sont</p>
    <ol class="list-decimal">
        {#each $selectedSuspects as suspect}
            <li>{ suspect.name }</li>
        {/each}
    </ol>
    <a class="underline" href="/">Revenir à l'accueil</a>
</div>