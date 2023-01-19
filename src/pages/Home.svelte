<script lang="ts">
    import Auth from '../components/Auth.svelte';
</script>
<div class="flex justify-center items-center h-screen w-full bg-violet">
    <div class="bg-violet-dark h-2/5 w-2/5 rounded-3xl flex overflow-hidden">
        <div class="p-5 w-1/2">
            <Auth />
        </div>
        <div class="p-5 w-1/2 gradient-background">
            hola
        </div>
    </div>
</div>

<style>
    .gradient-background {
        background: linear-gradient(135deg, #7353EE 0%, #E27E60 100%);
    }
</style>