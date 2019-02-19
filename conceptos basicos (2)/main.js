import Reservar from "./reservacion.js";
import Movimiento from "./cuenta.js";
import Appointment from "./cita.js";
 
let appointmentDate = new Date("11/04/19");
let a1 = new Appointment("Jonathan Alejandro", "19", appointmentDate, "6:00", "3123452356");

a1.printf();

a1.date = "12/04/19";

console.log(a1.hour);

a1.printf();


//reservaciones en restaurant

let res1 = new Reservar();
res1._name = "Jonathan";
res1._lastName = "Alejandro";
res1._age = "19 años";
res1._telephone = "3123452356";
res1._day = "21/12/19";
res1._hour = "18:00 hrs";
res1.showData();

//Cuenta bancaria
let cuenta1 = new Movimiento("Jonathan", "Alejandro", "Fullstack", "19", "calle sierra #1393", "3123452356", "jonaale@imail.com");
cuenta1._showData();
cuenta1._saldoTotal = 20;
cuenta1._deposito = 200;

cuenta1.move1();
console.log(`Your total money are ${cuenta1._saldoTotal} pesos`);
cuenta1._retiro = 1;
cuenta1.move2();
console.log(`Your total money are ${cuenta1._saldoTotal} pesos`);

import gasto from "./gasto.js";

let g1 = new Gasto("Jonathan Alejandro", "Subjefe", "3123452356", "Firmar contrato", "Aeromexico", "restaurantes", "Cr7", "5000", "USA");

g1.imprimir();

console.log(g1.nombre);
console.log(g1.puesto);
console.log(g1.lugar);

g1.vuelo = 6000;
console.log(g1.vuelo);

g1.comida = 2000;
console.log(g1.comida);

g1.hotel = 2500;
console.log(g1.hotel);

g1.pasaje = 1500;
console.log(g1.pasaje);

var t = g1.vuelo + g1.comida + g1.hotel + g1.pasaje;
console.log("total: " + t);