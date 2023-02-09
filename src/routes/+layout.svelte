<script>
    import '../app.css';
    import {paintings} from "$lib/stores/paintings";
    import FullscreenButton from "$lib/components/FullscreenButton.svelte";
</script>

<svelte:head>
    <!--    prefetch images-->
    {#each $paintings as painting}
        <link href="{painting.image}" rel="prefetch"/>
        {#each painting.suspects as suspect}
            <link href="/images/figures/{suspect.id}.jpg" rel="prefetch"/>
            <link href="/comics/{suspect.id}.png" rel="prefetch"/>
        {/each}
    {/each}
    <link href="/comics/start.png" rel="prefetch"/>
    <link href="/comics/end.png" rel="prefetch"/>
    <link href="/images/femme-nue-derriere.png" rel="prefetch"/>
    <link href="/images/painting-end.png" rel="prefetch"/>
</svelte:head>

<div class="relative h-full">
    <slot/>

    <FullscreenButton/>
</div>
