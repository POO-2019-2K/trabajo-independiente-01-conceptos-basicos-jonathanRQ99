export default class Cuenta {
    constructor(nombre, domicilio, telefono, cuenta, saldo) {
        this._nombre = nombre.toUpperCase();
        this._domicilio = domicilio;
        this._telefono = telefono;
        this._cuenta = cuenta;
        this._saldo = saldo;
    }

    imprimir(){
        console.log(`${this._nombre}, ${this._domicilio}, ${this._telefono}, ${this._cuenta}, ${this._saldo}`);
    }

    get nombre() {
        return this._nombre;
    }

    get telefono() {
        return this._telefono;
    }

    get cuenta() {
        return this._cuenta;
    }

    get domicilio() {
        return this._domicilio;
    }

    get saldo() {
        return this._saldo;
    }

    set domicilio(domicilio) {
        this._domicilio = domicilio;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
}