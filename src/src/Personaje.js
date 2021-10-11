class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  frase;

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
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