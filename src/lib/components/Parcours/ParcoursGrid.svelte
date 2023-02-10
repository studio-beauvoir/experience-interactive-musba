<script lang="ts">
    import {parcours} from "$lib/stores/parcours.ts";
    import {parcoursDone} from "$lib/stores/parcoursDone.ts";
    import {LockClosed, MagnifyingGlass} from "radix-icons-svelte";

    export let handleParcoursClick;
</script>

<section class="flex flex-col gap-16 justify-between w-full">
    <section class="flex flex-col gap-4">
        <h2 class="text-h1 text-yellow">Découvrez tout !</h2>

        <p class="text-p text-white">
            Voici tous les parcours existants de l’expérience interactive Too Well Stolen.
        </p>
        <p class="text-p text-white">
            27 chemins y sont disponibles.
        </p>
    </section>

    <section class="grid grid-cols-3 gap-12 text-yellow">
        {#each Object.entries($parcours) as [parcoursId, parcoursLetter], i}
            {#if $parcoursDone.includes(parcoursId)}
                <button class="relative flex items-center justify-center"
                        on:click={()=>handleParcoursClick(parcoursId)}>
                    <img class="animation-triangle absolute -z-10" src="/assets/triangle-parcours.svg" alt="parcours" style="animation-delay: 0.{Math.round(Math.random()*10)}s"/>
                    <div class="absolute -bottom-1 right-50 text-brown">
                        <MagnifyingGlass class="h-full w-full"/>
                    </div>
                    <span class="text-drop-capital uppercase text-yellow">{parcoursLetter}</span>
                </button>
            {:else}
                <span class="relative flex items-center justify-center">
                    <img class="absolute -z-10" src="/assets/triangle-parcours.svg" alt="parcours" style="animation-delay: 0.{Math.round(Math.random()*10)}s"/>
                    <div class="absolute -bottom-1 right-50 text-brown">
                    <LockClosed class="h-full w-full"/>
                    </div>
                    <span class="text-drop-capital uppercase text-brown">{parcoursLetter}</span>
                </span>
            {/if}
        {/each}
    </section>
</section>