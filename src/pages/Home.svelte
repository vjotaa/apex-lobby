<script lang="ts">
   import Icon from 'svelte-awesome';
   import { thList, user } from 'svelte-awesome/icons';
   import Table from '../components/Table.svelte';

</script>
<div class="bg-blue-400 w-full h-screen overflow-auto grid grid-cols-7 gap-7">
  <div class="col-span-1 p-5 pr-0 h-full">
    <div class="flex h-full flex-col justify-between">
      <div class="">
        <div class="px-2 h-10 rounded-xl flex items-center flex-row cursor-pointer bg-blue-300">
          <Icon class="ml-2 text-blue-100" data={thList} scale={1.1}/>
          <div class="ml-4 text-blue-100 font-medium">Partidas</div>
        </div>
      </div>
      <div>
        <div class="px-2 h-10 rounded-xl flex items-center flex-row cursor-pointer bg-blue-300">
          <Icon class="ml-2 text-blue-100" data={user} scale={1.1}/>
          <div class="ml-4 text-blue-100 font-medium">Perfil</div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-6 h-full py-5 pr-7">
    <div class="bg-blue-300 h-full p-6 rounded-3xl border border-blue-250 ">
      <p class="text-blue-100 text-3xl font-medium">Lista de partidas</p>
      <div class="mt-10">
        <Table/>
      </div>
    </div>
  </div>
</div>

<style>
    .gradient-background {
        background: linear-gradient(135deg, #7353EE 0%, #E27E60 100%);
    }
</style>