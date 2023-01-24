<script lang="ts">
import { formatRelative } from 'date-fns';
import { es } from 'date-fns/locale';
const formatDate = (date: Date) => {
  const formattedDate = formatRelative(date, new Date(), { locale: es });
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push({
        id: i,
        name: `Partida ${i}`,
        map: Math.random() > 0.5 ? 'Overload' : 'Worlds edge' ,
        type: Math.random() > 0.5 ? 'Arena' : 'Battle Royale',
        shotAssitence: Math.random() > 0.5 ? 'Activado' : 'Desactivado',
        players: `${Math.floor(Math.random() * 10)}/10`,
        status: Math.random() > 0.5 ? 'Activa' : 'Finalizada',
        date: formatDate(new Date()),
        region: Math.random() > 0.5 ? 'Norte America' : 'Europa',
      });
    }
    return data;
  }; 

</script>

<div class="relative overflow-x-auto rounded w-full">
  <table class="w-full text-sm text-left text-gray-50 rounded overflow-x-auto ">
      <thead class="text-xs uppercase  bg-blue-400 text-blue-100">
          <tr>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Nombre
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Tipo de juego
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Estado
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Asistencia de tiro
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Mapa
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Usuarios
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
                  Region
              </th>
              <th scope="col" class="px-6 py-3 align-middle text-center">
              </th>
          </tr>
      </thead>
      <tbody>
        {#each generateRandomData() as {id, name, type, status, map, players, region, shotAssitence, date}}
          <tr class=" bg-blue-400 text-blue-100">
              <th scope="row" class="px-6 py-4 font-medium ">
                <div class="w-fit">
                  <p class="text-lg align-middle text-center">
                    {name}
                  </p>
                  <p class="text-xs text-blue-200 align-middle text-center">
                   {date}
                  </p>
                </div>
              </th>
              <td class="px-6 py-4 align-middle text-center">
                <div class="w-full text-center flex justify-center">
                  <div class="rounded-sm bg-yellow-200 text-yellow-700 font-bold w-28 p-1">
                  {type}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 align-middle text-center">
                <div class="w-full text-center flex justify-center">
                  <div class="rounded-sm bg-green-300 text-green-700 font-bold w-fit p-1">
                 {status}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 align-middle text-center">
               {shotAssitence}
              </td>
              <td class="px-6 py-4 align-middle text-center">
                {map}
              </td>
              <td class="px-6 py-4 align-middle text-center">
                  <p class="text-green-700">{players}</p>
              </td>
              <td class="px-6 py-4 align-middle text-center">
                {region}
              </td>
              <td class="px-6 py-4 align-middle text-center">
                <button class="rounded-full gradient-background text-white font-medium text-md px-3 py-2 w-44">Obtener codigo</button>
              </td>
          </tr>
        {/each}
      </tbody>
  </table>
</div>

<style>
  .gradient-background {
          background: linear-gradient(135deg, #7353EE 0%, #E27E60 100%);
    }
</style>