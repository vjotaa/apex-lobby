import "./app.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
  hydrate: false,
});

export default app;
