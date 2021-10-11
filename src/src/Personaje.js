class Personaje {
  nombre;
  familia;
  image;
  edad;
  vivo = true;
  frase;

  constructor(nombre, familia, image, edad) {
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