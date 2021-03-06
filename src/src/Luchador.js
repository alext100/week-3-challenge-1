import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  weapon;
  skill;

  constructor(nombre, familia, image, edad, weapon, skill) {
    super(nombre, familia, image, edad);
    this.frase = "Primero pego y luego pregunto";
    this.weapon = weapon;
    if (skill >= 0 && skill <= 10) {
      this.skill = skill;
    }
  }
}

export default Luchador;