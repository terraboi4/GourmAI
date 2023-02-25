<script lang="ts">
    import { pb } from "../lib/pocketbase";
    function signOut() {
        pb.authStore.clear();
        window.location.href = '/login'
    }
</script>
<button on:click={signOut}>sign out?</button>