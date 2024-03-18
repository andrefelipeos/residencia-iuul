import { Agenda } from "./modelos/Agenda.js"
import { BancoDeDados } from "./BancoDeDados.js";
import { MenuPrincipal } from "./visoes/MenuPrincipal.js";

BancoDeDados.agendas.push(new Agenda())
const menu = new MenuPrincipal();
menu.iniciar();
