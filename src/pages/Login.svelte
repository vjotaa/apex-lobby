<script lang="ts"> 
    import Auth from '../components/Auth.svelte';
    import Background from '../components/Background.svelte';

</script>
<Background>
    <div class="bg-blue-400 max-sm:mx-5 z-10 grid grid-cols-2 max-sm:grid-cols-1  max-md:mx-10 rounded-3xl overflow-hidden lg:max-w-screen-lg">
        <div class="p-10 ">
            <Auth />
        </div>
        <div class="max-sm:hidden p-10 pb-20 pt-5 gradient-background">
        </div>
    </div>
</Background>