import { MenuPrincipal } from "./view/MenuPrincipal.js";

const menu = new MenuPrincipal();
await menu.iniciar();

console.log("Encerrando a aplicação...");
process.exit();
