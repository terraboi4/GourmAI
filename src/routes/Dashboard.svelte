<script lang="ts">
    import { pb, currentUser } from "../lib/pocketbase";
    function signOut() {
        pb.authStore.clear();
        window.location.href = '/login'
    }
    
    let gr_show = true;

    function show_GR() {
        gr_show = true;
    }

    function genRep() {
        //api?
    }
</script>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-lg drop-shadow-sm">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center">
            <img src="src/assets/logo-light.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                <li>
                    <button on:click={show_GR} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Generate Recipes</button>
                </li>
                <li>
                    <a href="/credits" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Buy Credits</a>
                </li>
                <li>
                {#if $currentUser}
                    <a href="/profile" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                        <img
                        class="w-8 h-8 rounded-full"
                        src="https://api.dicebear.com/5.x/initials/svg?seed={$currentUser.username}"
                        alt="avatar"
                        />
                    </a>
                {:else}
                    <a href="/login">Sign Up</a>
                {/if}
                </li>
            </ul>
        </div>
    </div>
</nav>

{#if gr_show}
    <div class="text-center">

        <div class="tab p-5">
            <h1 class="text-4xl p-5">Ingredients</h1>
            <input class="rounded-lg px-3 py-3 placeholder-gray-300 text-slate-600 relative bg-white text-sm border-0 shadow outline-none w-3/5" type="text" placeholder="apples, bananas, oranges...">
        </div>
        <hr>
        <div class="tab p-5">
            <h1 class="text-4xl p-5">Dietary Restrictions</h1>
            <h1 class="text-2xl pt-5">Allergies</h1>
            <input class=" rounded-lg px-3 py-3 my-6 placeholder-gray-300 text-slate-600 relative bg-white text-sm border-0 shadow outline-none w-3/5" type="text" placeholder="Allergies">
        </div>
        <hr>
        <div class="tab p-5">
            <h1 class="text-4xl p-5">Filters</h1>
            <div class="rounded-lg py-5">
                <p>Fanciness meter - ???? means very easy to make, ???????????????????? means difficult</p>
            </div>
            <div class="rounded-lg py-5">
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Breakfast</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Lunch</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Dinner</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Any</button>
                <p>Choose your meal, or select <strong>Any</strong>.</p>
            </div>
        </div>


    </div>

{/if}