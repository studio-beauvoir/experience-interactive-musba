<script>
    import {fade} from 'svelte/transition';
</script>
<div class="flex flex-col items-center justify-center h-full text-white" transition:fade>
    <h1 class="text-center">Dev page</h1>
    <button on:click={() => {throw new Error("Sentry Frontend Error");}} type="button">
        Throw error
    </button>
    <a class="underline" href="/static">Retour à l'accueil</a>
</div>
