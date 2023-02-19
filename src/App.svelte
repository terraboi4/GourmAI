<script lang="ts">
// @ts-nocheck

  import { Router, Route, Link } from "svelte-routing"
  import Login from './routes/Login.svelte'
  import Home from './routes/Home.svelte'
  import Dashboard from "./routes/Dashboard.svelte";


  let url = "";
</script>

<Router url="{url}">
  <div>
   <Route path="/"><Home/></Route>
   <Route path="login" component="{Login}" />
   <Route path="dashboard"><Dashboard/></Route>
  </div>
</Router>
