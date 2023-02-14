/*//act 1

let nombre = "homero";
let edad = "38";
let apellido = "simpson";

console.log(nombre);
console.log(apellido);
console.log(edad);

//act 2

const ciudad1 = "springfield";
const ciudad2 = "mar del plata";
const ciudad3 = "puerto madero";
const ciudad4 = "lanus";
const ciudad5 = "santa teresita";

console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

//act 3

let carnet = "Homero";

let nombreCompleto = "Homero Simpson";
let direccion = "banfield 697";
let pais = "Estados Unidos";

carnet = "nombre " + nombreCompleto + "direccion" + direccion + "pais" + pais;

console.log(carnet)

// act 4

alert("nombrar 5 integrantes de tu familia");



let nombre1 = prompt("primer");
let nombre2 = prompt("segundo");
let nombre3 = prompt("tercero");
let nombre4 = prompt("cuarto");
let nombre5 = prompt("quinto");

let familia = "tu primer integrante es " + nombre1 + "tu segundo es " + nombre2 + "tercero " + nombre3 + "cuarto" + nombre4 + "quinto"
+ nombre5 ;

alert(familia);


//act 5

let solicitar = prompt("ponga un precio entre $10 y $100");

let precio = 10

if(precio >= 10){
     alert(10 %30 )
}else if(precio >= "20"){
     alert(precio %30)
}

// ACT 6

let nombre = "Bart"

let entrada =prompt("ingresar nombre")

if(entrada == nombre){
     alert("fui yo")
}else{
     alert("Yo no fui")
}


// ACT 7

let entrada = prompt("ingresa un numero entre el 1  y el 4")



if(entrada == 1){
     alert("seleccionaste a Bart")
}else if(entrada == 2){
     alert("seleccionaste a Homero")
}else if(entrada == 3){
     alert("seleccionaste a Marge")
}else if(entrada == 4){
     alert("seleccionaste a Lisa")
}else{
     alert("no existe")
}



// ACT 8


let entrada = prompt("ingrese un impuesto entre 0 y o mayor a 3000")

if(entrada >= 0 && entrada <= 1000){
     alert("presupuesto bajo");
}else if(entrada >= 1001 && entrada <= 3000){
     alert("presupuesto medio");
}else if(entrada > 3000){
      alert("presupuesto alto");
}else{
     alert("demasiado alto");
}


//ACT 9

let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(heladera);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
}


//ACT 10

let cantidad = prompt('INGRESAR CANTIDAD DE REPETICIONES');
let texto    = prompt('INGRESAR TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
}

//ACT 11

let lados = prompt('INGRESAR CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
    if (index > 3) {
        break;
    }
    alert("lado");
}*/

//ACT 12

/*let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);*/

//ACT 13 

/*let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados);

//ACT 14

let entrada = prompt("ingresar numero")

while(entrada != "ESC"){
      switch(entrada){
          case "1":
                alert("Tomate");
          break;
          case "2":
                alert("papa");
          break;
          case "3":
                alert("carne");
          break;
          case "4":
                alert("pollo");
          break;
          default:
                alert("boludin");
          break;
      }
      entrada = prompt("ingresar numero")
}*/