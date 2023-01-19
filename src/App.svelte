<script>
  import { Route, Router } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Profile from "./pages/Profile.svelte";
</script>
  <Router>
      <Route component={Home} />
      <Route path="/profile" component={Profile} />
  </Router>