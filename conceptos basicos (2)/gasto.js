export default class Gasto {
    constructor(nombre, puesto, telefono, finalidad, vuelo, comida, hotel, pasaje, lugar) {
        this._nombre = nombre.toUpperCase();
        this._puesto = puesto;
        this._telefono = telefono;
        this._finalidad = finalidad;
        this._vuelo = vuelo;
        this._comida = comida;
        this._hotel = hotel;
        this._pasaje = pasaje;
        this._lugar = lugar;
    }

    imprimir() {
        console.log(`${this._nombre}, ${this._puesto}, ${this._telefono}, ${this._finalidad}, ${this._vuelo}, ${this._comida}, ${this._hotel}, ${this._pasaje}, ${this._lugar}`);
    }

    get nombre () {
        return this._nombre;
    }
    get puesto() {
        return this._puesto;
    }
    get finalidad() {
        return this._finalidad.toUpperCase();
    }
    get vuelo() {
        return this._vuelo;
    }
    get comida() {
        return this._comida;
    }
    get hotel() {
        return this._hotel;
    }
    get pasaje() {
        return this._pasaje;
    }
    get lugar() {
        return this._lugar;
    }

    set vuelo(vuelo) {
        this._vuelo = vuelo;
    }

    set comida(comida) {
        this._comida = comida;
    }

    set hotel(hotel) {
        this._hotel = hotel;
    }

    set pasaje(pasaje) {
        this._pasaje = pasaje;
    }


}
