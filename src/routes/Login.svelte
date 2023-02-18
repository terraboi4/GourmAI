<script lang="ts">
    import { currentUser, pb } from '../lib/pocketbase';
    import toast, { Toaster } from 'svelte-french-toast';
    let username: string;
    let password: string;
    async function login() {
        try {
            await pb.collection('users').authWithPassword(username, password);
        } catch (error) {
            toast("Uh oh... there's an error. Make sure you have a valid username and password.", {
                icon: '😔',
            });
        }
        
    }
    async function signUp() {
        try {
        const data = {
            username,
            password,
            passwordConfirm: password,
            name: 'hi mom!',
        };
        const createdUser = await pb.collection('users').create(data);
        await login();
        
        } catch (error) {
            toast("Uh oh... there's an error. Make sure you have a valid username and password.", {
                icon: '😔',
            });
        }
    }
    function signOut() {
        pb.authStore.clear();
    }

</script>
<Toaster/>
{#if $currentUser}
    <p>Signed in as {$currentUser.username} <button class="btn btn-primary" on:click={signOut}>Sign out?</button></p>
{:else}
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
    </div>
{/if}