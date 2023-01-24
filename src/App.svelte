<script>
  import { Route, Router } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Login from "./pages/Login.svelte";
</script>
  <Router>
    <Route component={Login} />
    <Route path="/home" component={Home} />
</Router>