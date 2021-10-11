class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";
  AnosDeReinado = 2;
  Arma;
  Destreza;
  Peloteo;
  AsesoraA;
  SirveA;
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
    this.estado = "muerto";
  }

}
export default Personaje;