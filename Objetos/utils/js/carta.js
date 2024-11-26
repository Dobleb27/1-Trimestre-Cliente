/* Cada fichero.java tenia -> Clase con el mismo nombre del fichero, aqui se puede */
/* Puedes poner tantas clases como quieras */

class carta {
  //Atributos (private #, public, protected)
  valor;
  imagen;
  //Constructor
  constructor(representacion) {
    //Representacion = 10T, 6C, JP...
    this.imagen = `/${representacion}.png`; //El ./ es porque lo estaria cogiendo de un fichero de imagenes
    this.valor = representacion.substring(0, representacion.length - 1); //Extrae todos los datos menos el ultimo
    switch (this.valor) {
      case "J":
        this.valor = 10;
        break;
      case "Q":
        this.valor = 10;
        break;
      case "K":
        this.valor = 10;
        break;
      default:
        this.valor = Number(this.valor);
        break;
    }
  }
  //Metodos (getter y setter) necesarios
  //Metodos aparte
}
