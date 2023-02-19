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
    <button class="btn btn-primary"> Sign Out</button>
    <!--<script lang='ts'>window.location.href = '/dashboard'</script>-->
{:else}


    <div class="rounded-md flex text-center justify-center" style="min-height: 75vh;">
        
    </div>

    <!--
    <div class="d-flex align-items-center justify-content-center" style="min-height: 75vh;">
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