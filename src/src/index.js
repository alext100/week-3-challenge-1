import Rey from "./Rey.js";
import Luchador from "./Luchador.js";
import Escudero from "./Escudero.js";
import Asesor from "./Asesor.js";
import PersonajeComponent from "./PersonajeComponent.js";

const joffrey = new Rey("Joffrey", "Baratheon", 'img/joffrey.jpg', 17, 2);
const jaime = new Luchador("Jaime", "Lannister", 30, "espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 20, "dragones", 7);
const tyrion = new Asesor("Tyirion", "Lannister", 28, daenerys);
const bronn = new Escudero("Bronn", "Blackwater", 28, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

const character = document.querySelector(".character");
const characterPicture = document.querySelector(".character__picture");
const characterName = document.querySelector(".character__name");
const characterAge = document.querySelector(".character__info .list-unstyled"); // nextElementChild.textContent => edad
const thumbDown = document.querySelector(".fa-thumbs-down");
console.log('thumbDown: ', thumbDown);
const thumbUp = document.querySelector(".fa-thumbs-up");
console.log('thumbUp: ', thumbUp);
const characterInformation = document.querySelector(".character__overlay .list-unstyled");
//////////
const characterList = document.querySelector(".characters-list");
const characterCard = document.querySelector(".character");

let createdCharacterCard = new PersonajeComponent();

/*

characterPicture.src = joffrey.image;
characterPicture.alt = "Picture of Joffrey Baratheon";
characterName.textContent = joffrey.nombre + " " + joffrey.familia;
characterAge.firstElementChild.textContent = "Edad: " + joffrey.edad + " años";
characterInformation.firstElementChild.textContent = `Años de reinado: ${joffrey.yearsOfReign}`;
characterInformation.firstElementChild.textContent = `Arma: no tiene`;

 */
