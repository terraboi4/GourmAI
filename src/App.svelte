<script lang="ts">
// @ts-nocheck

  import { Router, Route, Link } from "svelte-routing"
  import Login from './routes/Login.svelte'
  import Home from './routes/Home.svelte'

  let url = "";
</script>

<Router url="{url}">
  <div>
   <Route path="/"><Home/></Route>
   <Route path="login" component="{Login}" />
  </div>
</Router>