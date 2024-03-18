import { MenuPrincipal } from "./visoes/MenuPrincipal.js";

const menu = new MenuPrincipal();
await menu.iniciar();

console.log("Encerrando a aplicação...");
process.exit();
