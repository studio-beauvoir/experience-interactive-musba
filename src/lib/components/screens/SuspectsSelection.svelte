<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {createEventDispatcher} from 'svelte';

    export let suspectsList: Array<string>;

    const dispatch = createEventDispatcher();

    function addSuspect(suspect) {
        dispatch('suspect-selected', {
            suspect: suspect
        });
    }
</script>

<section class="bg-red">
    <section>
        {#each suspectsList as suspect}
            <Button handleClick={()=>addSuspect(suspect)}>{ suspect }</Button>
        {/each}
    </section>
    <article>
        Qui est le suspect?
    </article>
</section>