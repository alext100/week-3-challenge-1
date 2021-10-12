import Component from "./Component.js";

class Personaje extends Component {
  nombre;
  familia;
  image;
  edad;
  vivo = true;
  frase;

  constructor(parentElement, { nombre, familia, image, edad, vivo, frase }) {
    this.nombre = nombre;
    this.familia = familia;
    this.image = image;
    this.edad = edad;
  }

  hablar() {
    return this.frase;
  };

  morir() {
    this.vivo = false;
  }

}
export default Personaje;