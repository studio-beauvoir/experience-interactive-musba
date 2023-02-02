<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function startGame() {
        goto('/game')
    }
</script>

<div class="flex flex-col items-center justify-center h-full">
    <img src="https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC85YzQwZWU2Yy0xMWY4LTRlNGItODYxNC1lODVlNzRkYmVkNTEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19" alt="Image représentant la sculture nommée La figure au bord de l'eau, du sculteur Joseph Rivière">
    <p class="flex text-center">Excuse-moi ? <br> J’aurais besoin d’un petit coup de pouce... <br>Une personne malveillante vient de voler ma serviette et même si la nudité ne me déplaît, j’aimerais bien la retrouver. <br>Il me semble l’avoir vu partir par là !</p>
    <Button handleClick={startGame}>Continuer</Button>
</div>