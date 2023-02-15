<script lang="ts">
    export let tall = false;
    export let figure;
</script>
<section class="relative {tall?'h-56':'h-40'} w-full p-6 border-t border-yellow">
    <img alt=" "
         class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
         src="/images/figures/{figure}.jpg">
    <article class="flex flex-col justify-between h-full">
        <slot></slot>
    </article>
</section>