import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";

class Escudero extends Personaje {
  luchador;
  pelotismo;

  constructor(nombre, familia, image, edad, luchador, pelotismo) {
    super(nombre, familia, image, edad);
    this.frase = "Soy un loser";
    this.pelotismo = pelotismo;

    if (luchador instanceof Luchador) {
      this.luchador = luchador;
    }
  }
}

export default Escudero;