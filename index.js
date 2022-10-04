// let frutas =  [ "naranja", "uva", "manzana verde", "banana", "borojo", "gusanillo", "lulo", "higos", "papaya", "arandanos"]
// frutas[2]  []
// frutas.length //me dice el numero de elementos que tiene array//
// frutas.length - 1 //me va aparecer 9 que es arandanos, que que comienza a contarse desde cero//
// frutas[frutas.length - 1] // para acceder a la ultima posicion, le ponemos menos uno//

// let mentor = {
//     name: "lucas",
//     edad: 22
// } //alt 123//

// let alumno = {
//     name: "mauro",
//     edad: 30

// }

// mentor["edad"]
// mentor.edad        //ambos metodos nos traen los mismos resultados, se suele usar con el punto//
// alumno.name
// alumno["name"]

// let edadAntonella = 20
// let edadMauro = 20

//(!!!operadores de comparacion!!!!), comparan una expresion con otra, nos devuelve como resultado un booleano, que puede ser true o false//

// 22 == 22 //va aparecer true//

// let edadAntonella = 20 //type of "string"//
// let edadMauro = "20" //type of "number"//

// edadLucas == edadMAuro //va aparecer true auqnue la edad de mauro sea string, ya que es interpretativo//

// si en lugar de == pongo === para saber si ambas expresiones son iguales, compara hasta los tipos de datos, y va tirar false, porque es super estricto, y uno es un number y otro es un string, si fueran doble igual aparece true, porque no compara el tipo de dato, no es tan estricto//

// para preguntar si esas expresiones son diferentes edadAntonella != edadMauro, dice false, porque son iguales, y en valor no son diferenntes, no evalua tipo de dato//

// si agrego otro igual !== se evalua valor y tipo de dato, es mas especifica y estrica entonces edadAntonella !== edadMauro es true, porque son diferentes en cuanto tipo de datos//

// let edadAntonella = 20
// let edadMauro = 30

// edadAntonella < edadMauro //es true//
// edadAntonella > edadMauro //es false//

//AND, OR, NOT//  son &&, || ,!

// el and evalua de manera booleana, y te devuelve un booleano

// min 11:30

// let num1 = 2
// let num2 = 2

// num1 == num2 //nos devuelve true
// true && false //nos devuelve false, el and nos devuelve true cuando ambas expresiones son verdaderas
// true && true // nos devuelve true, porque ambas condiciones son verdaderas
// false && false // es un false, porque no es una comparacion, es una evaluacion de expresiones, no esta viendo si ambas son iguales

// num1 == num2 && true // es true
// num1 == num2 && num1 < num2 // es false porque la segunda no es verdadera, no se cumple

// diferencia entre or y and, para que el and te devuelva un true todas las expresiones tienen que ser true, y para que el or te devuelva un true tiene que haber al menos un true

// true || false //es true, si tengo al menos un true va a ser true
// false || false //es false, porque si son todas false es false
// false || false || true //es true porque hay un true

//NOT ! devuelve false si es true, lo niega

// let booleano = true //es true
// !booleano //devuelve lo contrario a lo que es, en este caso es true y nos devuelve false
// !true// es false
// !false// es true

//condicionales

// 1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.

// let num1 = 32
// let num2 = 2

// if(num1>num2){
//     console.log('num1 es mayor que num2')
// } else if (num1<num2) {
//     console.log('num2 es mayor que num1 ')
// }

//2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.

// if(num1 == num2){
//     console.log("son iguales")
// } else if (num1 != num2){
//     console.log("son diferentes")
// }

// 3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.

// if(num1>num2){
//     console.log('num1 es mayor que num2')
// } else if (num1<num2) {
//     console.log('num2 es mayor que num1 ')
// } else (num1==num2) {
//     console.log( "son iguales")
// }

// 4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.

// let num3 = 68

// if (num1>num2 && num1>num3) {
//     console.log("numero 1 es mayor")
// } else if (num2>num1 && num2>num3){
//     console.log("numero 2 es mayor")
// } else {
//     console.log("numero 3 es mayor")
// }

// 5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.

// let personas = [
//     {nombre: "antonella",
// edad: 20,
// altura: 1.48},

// {nombre: "Gabi",
// edad: 26,
// altura: 1.70}

// ]

// if (personas[0].edad>personas[1].edad && personas[0].altura>personas[1].altura){
//     console.log("antonella es mayor que gabi y mas alta")
// }  else if (personas[0].edad<personas[1].edad && personas[0].altura<personas[1].altura){
//     console.log("antonella es menor que gabi y mas baja");

// }

//6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.

// let datos = {
//     nombre: prompt("escribe tu nombre"),
//     edad: prompt("escribe tu edad"),
//     altura: prompt("escribe tu altura"),
//     vision: prompt("escribe tu vision"),
// }

// if(datos.edad>=18 && datos.altura>=150 && datos.vision>=8 ){
//     alert("podes conducir")
// } else if (datos.edad<18  ||  datos.altura<150  ||  datos.vision<8){
//     alert("no podes conducir")
// }

//7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.



// let nombre = prompt("ingrese su nombre")
// let pase = prompt("vip o normal")
// let entrada = prompt("tiene entrada o no?")

// if(nombre === "antonella" || pase === "vip"){
//     console.log("bienvenido " + nombre)
// } else if (entrada === "si"){
//    let pregunta = prompt("desea utilizarla?")
//    if(pregunta === "si"){
//     console.log("bienvenido")
//    }
// } else{
//     let pregunta2 = prompt("desea comprar una entrada?")
//     if(pregunta2 === "si"){
//         let dinero = Number(prompt("dinero disponlible"))
//         if(dinero >= 1000){
//             console.log("entrada disponible, bienvenido " + nombre)
//         } else{ console.log("rechazo de venta")}
//     } 
//     else{console.log("despedida")
// }
// }

//8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.





//9.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
//  let datos = {
//     edad: prompt("ingresa tu edad")
//  }

//  if(datos.edad<=12){
//     alert("infante")
//  } else if (datos.edad<=18){
//     alert("adolescente")

//  } else if (datos.edad<=45){
//     alert("mayor joven")
//  }
//  else if (datos.edad<=100){
//     alert("anciano")
//  }
//  else if (datos.edad>100){
//     alert("en serio tienes esa edad?")
//  }

//10.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
// let jugadores = [
//   { nombre: "agus", opcion: prompt("piedra, papel o tijera") },
//   { nombre: "anto", opcion: prompt("piedra, papel o tijera") },
// ];

// if (jugadores[0].opcion === "papel" && jugadores[1].opcion === "piedra") {
//   alert("gano agus");
// } else if (
//   jugadores[0].opcion === "tijera" &&
//   jugadores[1].opcion === "papel"
// ) {
//   alert("gano agus");
// } else if (
//   jugadores[0].opcion === "piedra" &&
//   jugadores[1].opcion === "tijera"
// ) {
//   alert("gano agus");
// } else if (jugadores[0].opcion === jugadores[1].opcion){
//   alert("empate");
// } else {
//   alert("gano anto");
// }

//11.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
// let color = prompt("ingrese un color");
// switch (color) {
//   case "negro":
//   case "blanco":
//     console.log("falta de color");
//     break;
//   case "verde":
//     console.log("color de la naturaleza");
//     break;
//   case "azul":
//     console.log("color del agua");
//     break;
//   case "amarillo":
//     console.log("El color del sol");
//     break;
//   case "rojo":
//     console.log("El color del fuego");
//     break;
//   case "marron":
//     console.log("El color de la tierra");
//     break;
//   default:
//     console.log("Excelente elección, no lo teníamos pensado");
// }

// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.

// let operacion = (prompt("ingrese una operacion"))
// let val1 = Number(prompt("ingrese un numero"))
// let val2 = Number(prompt("ingrese un numero"))



// switch (operacion){
//     case "suma":
//         console.log(val1+val2);
//         break
//         case "multiplicacion":
//         console.log(val1*val2);
//         break
//         case "division":
//           if(val2 === 0){alert("ERROR")};
//           console.log(val1/val2);
//             break
           
// }

//13.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.
// let datos = {
//     nombre: prompt("ingrese su nombre"),
//     apellido: prompt("ingrese su apellido"),
//     dni: Number(prompt("ingrese su dni"))

// }

// console.log(datos)
//  let pregunta = prompt("los datos estan correctos?")

// switch (pregunta) {
//     case "si":
//         console.table(datos), 
//          console.log("datos ingresados exitosamente")
//          break
//          case "no":  console.log("vuelva a intentarlo en un mes")
        
// } 