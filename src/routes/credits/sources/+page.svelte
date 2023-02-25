<script lang="ts">
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";
    import {ExternalLink} from "radix-icons-svelte";

    function backToHome() {
        goto('/credits')
    }
</script>

<section class="flex flex-col items-center justify-center h-full bg-black text-white gap-6">
    <img alt="" class="absolute z-0 top-0 right-0" src="/assets/lines-svg.svg">
    <h1 class="text-yellow text-display mb-6">Sources</h1>
    <section class="flex flex-col items-center text-center gap-4">
        <h2 class="text-yellow text-h2">Oeuvres</h2>
        <a class="text-p underline underline-offset-2 decoration-1"
           href="https://musba-bordeaux.opacweb.fr/fr/notice/bx-e-1868-figure-au-bord-de-l-eau-pour-la-piscine-municipale-d-albi-687fbf51-4a95-4f84-ad06-d476f090de2b"
           rel="noreferrer"
           target="_blank">
            Joseph Rivière, <span class="italic">La figure au bord de l'eau</span>, 1951
            <ExternalLink class="inline"/>
        </a>
        <a class="text-p underline underline-offset-2 decoration-1"
           href="https://musba-bordeaux.opacweb.fr/fr/notice/fnac-21473-hommage-a-vuillard-95c47522-0c9a-4997-952c-1a6703c32813"
           rel="noreferrer"
           target="_blank">
            Willem Van Hasselt, <span class="italic">Hommage à Vuillard</span>, 1943
            <ExternalLink class="inline"/>
        </a>
        <a class="text-p underline underline-offset-2 decoration-1"
           href="https://musba-bordeaux.opacweb.fr/fr/notice/bx-2020-1-25-l-archer-0e8a67d7-7622-4ca9-a772-950c48463e34"
           rel="noreferrer"
           target="_blank">
            Jean Dupas, <span class="italic">L'archer</span>, 1917
            <ExternalLink class="inline"/>
        </a>
        <a class="text-p underline underline-offset-2 decoration-1"
           href="https://musba-bordeaux.opacweb.fr/fr/notice/bx-2020-1-26-la-gloire-de-bordeaux-389d0f24-aadf-463c-83c7-2601d6dae749"
           rel="noreferrer"
           target="_blank">
            Jean Dupas, <span class="italic">La gloire de Bordeaux</span>, 1937
            <ExternalLink class="inline"/>
        </a>
        <a class="text-p underline underline-offset-2 decoration-1"
           href="https://musba-bordeaux.opacweb.fr/fr/notice/bx-1998-1-1-femme-nue-ou-femme-qui-s-essuie-apres-le-bain-31e5fad4-a1c3-4102-8618-e101aaafe4fa"
           rel="noreferrer"
           target="_blank">
            Georges Dorignac, <span class="italic">Femme nue</span>, 1920
            <ExternalLink class="inline"/>
        </a>
    </section>

    <section class="flex flex-col items-center text-center gap-4">
        <h2 class="text-yellow text-h2">Musiques</h2>
        <a class="text-p underline underline-offset-2 decoration-1"
           href="https://www.youtube.com/watch?v=Z0fgutcwaCQ"
           rel="noreferrer"
           target="_blank">
            Murray Kellner, <span class="italic">A Dream Vintage</span>
            <ExternalLink class="inline"/>
        </a>
    </section>

    <section class="flex justify-center">
        <img alt="Logotype de la fillière MMI de l'IUT Bordeaux Montaigne" class="" src="/images/logo-mmi-bordeaux.png">
        <img alt="Logotype du Musée des Beaux-Arts de Bordeaux" src="/images/logo-musba-bordeaux.png">
        <!-- <img alt="Logotype du groupe à l'origine du projet, nommé Studio Beauvoir" src="/images/logo-studio-beauvoir.png"> -->
    </section>
    <div class="flex gap-6">
        <PrimaryButton handleClick={backToHome} soundId={"reverse"}>Retour</PrimaryButton>
    </div>
</section>