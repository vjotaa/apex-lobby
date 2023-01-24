<script>
 import { field, form } from 'svelte-forms';
 import { required } from 'svelte-forms/validators';
 let isSignUp = false;

  const name = field('name', '', [required()]);
  const password = field('password', '', [required()]);
  const loginForm = form(name, password);

  const onLogin = async () => {
    isSignUp = !isSignUp;
  };
</script>

<div class="pb-20 pt-5">
    <div class="w-full h-16 flex items-center rounded-xl p-2 mb-5 bg-blue-500 relative overflow-hidden">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="{isSignUp ? 'bg-blue-500' : 'bg-blue-300'} cursor-pointer bg-animated max-sm:text-sm z-10 w-1/2 button rounded-md flex items-center justify-center text-white font-bold" on:click={onLogin}>
           Inicia sesion
        </div>
         <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="{isSignUp ? 'bg-blue-300' : 'bg-blue-500'} cursor-pointer bg-animated max-sm:text-sm z-10 w-1/2 button rounded-md flex items-center justify-center text-white font-bold" on:click={onLogin}>
            Registrate
        </div>
    </div>
    <div>
        <form class="content">
            <div class="flex flex-col">
                <label for="name" class="mb-1 text-blue-200 max-sm:text-sm ">Email</label>
                <input class="bg-blue-300 h-12 rounded-md max-sm:text-sm " type="text" bind:value={$name.value} />
            </div>
            <div class="flex flex-col my-5">
                <label for="name" class="mb-1 text-blue-200 max-sm:text-sm ">Contraseña</label>
                <input class="bg-blue-300 h-12 rounded-md px-2 max-sm:text-sm " type="password" bind:value={$password.value} />
            </div>
            <!-- no se como guardar los cambios, pero eso te hace el truco en vez de escribir el estilo-->
            <!-- --><button class="w-full h-14 items-center p-5 my-6 bg-violet rounded-xl justify-center text-white font-bold space-y-4">Login</button>
            
          </form>
          <p class="text-blue-200 text-sm max-sm:text-xs ">
            Al iniciar sesion estas accediendo a los <span class="text-blue-100">Terminos y condiciones</span> y a la <span class="text-blue-100"> Politica de privacidad.</span>
          </p>
    </div>
    <p class="mt-10 text-violet font-bold text-sm max-sm:text-xs">
        ¿Olvidaste tu contraseña?
    </p>
</div>

<style>
    .button {
    height: 90%;
    }

    input[type=text], input[type=password] {
        @apply px-2;
        @apply text-blue-100;
    }
    input:focus{
        outline: none;
        @apply shadow-xl;
    }

    .bg-animated {
        transition: ease-in 300ms;
    }

</style>