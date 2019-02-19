export default class Empleado {
   constructor(numTrabajador, nombre, puesto, fechaIngreso,) {
       this._numtrabajador = numTrabajador;
       this._nombre = nombre;
       this._puesto = puesto;
       this._fechaIngreso = fechaIngreso;
   }

   get antiguedad() {
       return this._fechaIngreso.get
   }

   get numTrabajador() {
       return this._numtrabajador;
   }

   get nombre(){
       return this._nombre;
   }

   set puesto(puesto){
       return this._puesto = puesto;
   }

   get fechaIngreso(){
       return this._fechaIngreso;
   }

   imprimir (){
       console.log(`nombre: ${this._numtrabajador}, ${this._nombre}, ${this._puesto}, ${this._fechaIngreso}`);


   }
    }
