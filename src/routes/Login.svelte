<script lang="ts">
    import { currentUser, pb } from '../lib/pocketbase';
    import toast, { Toaster } from 'svelte-french-toast';

    
    let username: string;
    let password: string;

    function error(err) {
        
        let message = ""
        //apparently username is called "identity" in pocketbase
        if (err.data.data.identity) {
            
            message += ` Username: ${err.data.data.identity.message}\n`
        }
        else if (err.data.data.password) {
            
            message += ` Password: ${err.data.data.password.message}\n`
        }
        //this is checking if you already have a registered account if you click "register"
        else if (err.data.data.username) {
            
            message += ` Username: ${err.data.data.username.message}\n`
        }
        else {
            message += "Credentials not found. Make sure you have an account"
        }
        return message
    }

    async function login() {
        try {
            await pb.collection('users').authWithPassword(username, password);
        } catch (err) {
            
            //returns error messages
            toast.error(error(err))
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
        } catch (err) {
            //returns error messages
            toast.error(error((err)))
            
        }
    }
    function signOut() {
        pb.authStore.clear();
    }


</script>
<Toaster/>
{#if $currentUser}
    <script lang='ts'>window.location.href = '/dashboard'</script>
{:else}
    <div class=" bg-gray-100">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class=" bg-gray-50 border-gray-200 w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div class="text-center text-gray-600 text-2xl py-4">
                    <h1>Login/Register 🍳</h1>
                </div>
                <div class=" text-gray-600  block p-3">
                    <label for="username">Username</label>
                    <input class="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full px-2.5 py-2 my-2" type="text" placeholder="kitchenlover123" bind:value={username}>
                    <label for="pass">Password</label>
                    <input name="pass" type="password" class="slider bg-gray-50 border text-gray-900 sm:text-sm rounded-lg block w-full px-2.5 py-2 my-2" placeholder="•••••••" bind:value={password}>
                    
                
                </div>
                <div class="text-center">
                    <button type="submit" class="bg-logo-color text-white rounded-lg px-5 py-2.5 mb-2.5text-center" on:click={login}>Login</button>
                    <button type="submit" class="bg-logo-color text-white rounded-lg px-5 py-2.5 mb-2.5 text-center" on:click={signUp}>or Register</button>
                </div>
                
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


