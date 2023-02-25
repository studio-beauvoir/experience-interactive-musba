<script>
    export let filename;
    export let title
</script>
<article class="flex flex-col gap-2 w-full items-center">
    <img alt=" "
         class="aspect-square"
         src="/comics/{filename}.png">
    <span class="text-p text-white text-center">{title}</span>
</article>