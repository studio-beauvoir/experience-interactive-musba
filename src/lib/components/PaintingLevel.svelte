<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import SuspectButton from "$lib/components/SuspectButton.svelte";

    export let painting;

    const dispatch = createEventDispatcher();

    function addSuspect(suspect) {
        dispatch('suspect-selected', {
            suspect
        });
    }
</script>

<section>
    <section class="w-full aspect-square relative overflow-auto">
        <div class="relative h-full w-min">
            <img alt="{painting.name}" class="mx-auto h-full w-auto max-w-none" src="{painting.image}">
            {#each painting.suspects as suspect}
                <SuspectButton suspect={suspect} handleClick={()=>addSuspect(suspect)}/>
            {/each}
        </div>
    </section>
    <article>
        <h2 class="text-2xl">Qui est le suspect?</h2>
    </article>
</section>