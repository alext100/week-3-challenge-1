import Personaje from "./Personaje.js";

class Rey extends Personaje {
  yearsOfReign;

  constructor(nombre, familia, image, edad, yearsOfReign) {
    super(nombre, familia, image, edad);
    this.yearsOfReign = yearsOfReign;
    this.frase = "Vais a morir todos";
  }
}

export default Rey;