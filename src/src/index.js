import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Escudero from "./Escudero.js";
import Asesor from "./Asesor.js";

const joffrey = new Rey("Joffrey", "Baratheon", 17, 2);
const jaime = new Luchador("Jaime", "Lannister", 30, "espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 20, "dragones", 7);
const tyrion = new Asesor("Tyirion", "Lannister", 28, daenerys);
const bronn = new Escudero("Bronn", "Blackwater", 28, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];