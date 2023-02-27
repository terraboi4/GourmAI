<script lang="ts">
    import { pb, currentUser } from "../lib/pocketbase";
    import Checkbox from "../lib/Checkbox.svelte";
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
                
                    <a href="/profile" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                        <img
                        class="w-8 h-8 rounded-full"
                        src="https://api.dicebear.com/5.x/initials/svg?seed={$currentUser.username}"
                        alt="avatar"
                        />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{#if gr_show}
    <div class="text-center">

        <div class="tab hidden">
            <h1 class="text-4xl p-5">Ingredients</h1>
            <input class="rounded-lg px-3 py-3 placeholder-gray-300 text-slate-600 relative bg-white text-sm border-0 shadow outline-none w-3/5" type="text" placeholder="apples, bananas, oranges...">
        </div>
        <div class="tab hidden">
            <h1 class="text-4xl p-5">Dietary Restrictions</h1>
            
            <Checkbox id="Vegetarian"/>
            <Checkbox id="Vegan"/>
            <Checkbox id="Gluten-Free"/> <br>
            <Checkbox id="Lactose Intolerance"/>
            <Checkbox id="Ketogenic"/>
            <Checkbox id="Paleolithic"/>
            <h1 class="text-2xl pt-5">Allergies</h1>
            <input class=" rounded-lg px-3 py-3 my-6 placeholder-gray-300 text-slate-600 relative bg-white text-sm border-0 shadow outline-none w-3/5" type="text" placeholder="Allergies">
        </div>
        <div class="tab hidden">
            <h1 class="text-4xl p-5">Filters</h1>
            <div class="rounded-lg py-5">
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">🍴</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">🍴🍴</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">🍴🍴🍴</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">🍴🍴🍴🍴</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">🍴🍴🍴🍴🍴</button>
                <p>Fanciness meter - 🍴 means very easy to make, 🍴🍴🍴🍴🍴 means difficult</p>
            </div>
            <hr>
            <div class="rounded-lg py-5">
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Breakfast</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Lunch</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Dinner</button>
                <button class="inline-block px-6 bg-logo-color hover:bg-[#ed7e39] rounded-md py-2 mx-2">Any</button>
                <p>Choose your meal, or select <strong>Any</strong>.</p>
            </div>
        </div>

        <!--buttons-->
        <div class="overflow-auto">
            <div class="float-right">
                <button type="button" id="prevBtn" on:click={formAction(-1)}>Previous</button>
                <button type="button" id="nextBtn" on:click={formAction(1)}>Next</button>
            </div>
        </div>
        
        <!--step things-->
        <div class="text-center mt-10">
            <span class="h-[15] w-[15] my-1 bg-[bg-gray-300] rounded-lg inline-block opacity-50 active:opacity-100"></span>
            <span class="h-[15] w-[15] my-1 bg-[bg-gray-300] rounded-lg inline-block opacity-50 active:opacity-100"></span>
            <span class="h-[15] w-[15] my-1 bg-[bg-gray-300] rounded-lg inline-block opacity-50 active:opacity-100"></span>
            <span class="h-[15] w-[15] my-1 bg-[bg-gray-300] rounded-lg inline-block opacity-50 active:opacity-100"></span>
        </div>

    </div>

{/if}