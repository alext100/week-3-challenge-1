import Personaje from "./Personaje.js";

class Rey extends Personaje {
  yearsOfReign;

  constructor(nombre, familia, edad, yearsOfReign) {
    super(nombre, familia, edad);
    this.yearsOfReign = yearsOfReign;
    this.frase = "Vais a morir todos";
  }
}

export default Rey;