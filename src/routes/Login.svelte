<script lang="ts">
    import { currentUser, pb } from '../lib/pocketbase';
    import toast, { Toaster } from 'svelte-french-toast';

    
    let username: string;
    let password: string;
    async function login() {
        try {
            await pb.collection('users').authWithPassword(username, password);
        } catch (error) {
            toast.error(error.errorMessage);
        }
        
    }
    async function signUp() {
        try {
        const data = {
            username,
            password,
            passwordConfirm: password
        };
        const createdUser = await pb.collection('users').create(data);
        await login();
        } catch (error) {
            toast.error(error);
        }
    }
    function signOut() {
        pb.authStore.clear();
    }

</script>
<Toaster/>
{#if $currentUser}
    <!--<script lang='ts'>window.location.href = '/dashboard'</script>-->
{:else}
    <div class="dark:bg-gray-900 bg-gray-100">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class=" bg-gray-50 w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="text-center dark:text-gray-100 text-gray-600 text-2xl py-4">
                    <h1>Login/Register 🍳</h1>
                </div>
                <div class=" text-gray-600 dark:text-gray-200 block p-3">
                    <label for="username">Username</label>
                    <input class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-2 my-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" type="text" placeholder="kitchenlover123" bind:value={username}>
                    <label for="username">Password</label>
                    <input class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-2 my-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" type="text" placeholder="ilovetocook!" bind:value={password}>
                    
                
                </div>
                <button type="submit" class="bg-blue-500 w-full text-gray-600 dark:text-white rounded-lg px-5 py-2.5 text-center" on:click={login}>Login</button>
                <button type="submit" class="bg-blue-500 w-full text-gray-600 dark:text-white rounded-lg px-5 py-2.5 text-center" on:click={signUp}>or Register</button>
            </div>
        </div>
    </div>


    <!--<div class="d-flex align-items-center justify-content-center" style="min-height: 75vh;">
        <div class="card text-start text-center p-4">
        <div class="card-body">
            <h4 class="card-title">Login/Register 🍳</h4>
            <form on:submit|preventDefault>
                <input type="text" placeholder="Username" id="username" class="form-control mb-3" bind:value={username}>
                <input type="password" placeholder="Password" id="password" class="form-control mb-3" bind:value={password}>
                <button id="login" type="button" class="btn btn-outline-primary w-100 mb-2" on:click={login}>Login</button>
                <button id="register" type="button" class="btn btn-outline-primary w-100" on:click={signUp}>or Register</button>
            </form>
                
        </div>
        </div>
    </div>-->
{/if}