let frutas =  [ "naranja", "uva", "manzana verde", "banana", "borojo", "gusanillo", "lulo", "higos", "papaya", "arandanos"]
frutas[2]  []
frutas.length //me dice el numero de elementos que tiene array//
frutas.length - 1 //me va aparecer 9 que es arandanos, que que comienza a contarse desde cero//
frutas[frutas.length - 1] // para acceder a la ultima posicion, le ponemos menos uno//


let mentor = {
    name: "lucas",
    edad: 22
} //alt 123//

let alumno = {
    name: "mauro",
    edad: 30

}

mentor["edad"]
mentor.edad        //ambos metodos nos traen los mismos resultados, se suele usar con el punto//
alumno.name
alumno["name"]

let edadAntonella = 20
let edadMauro = 20

//(!!!operadores de comparacion!!!!), comparan una expresion con otra, nos devuelve como resultado un booleano, que puede ser true o false//

22 == 22 //va aparecer true//


let edadAntonella = 20 //type of "string"//
let edadMauro = "20" //type of "number"//

edadLucas == edadMAuro //va aparecer true auqnue la edad de mauro sea string, ya que es interpretativo//

// si en lugar de == pongo === para saber si ambas expresiones son iguales, compara hasta los tipos de datos, y va tirar false, porque es super estricto, y uno es un number y otro es un string, si fueran doble igual aparece true, porque no compara el tipo de dato, no es tan estricto//

// para preguntar si esas expresiones son diferentes edadAntonella != edadMauro, dice false, porque son iguales, y en valor no son diferenntes, no evalua tipo de dato//

// si agrego otro igual !== se evalua valor y tipo de dato, es mas especifica y estrica entonces edadAntonella !== edadMauro es true, porque son diferentes en cuanto tipo de datos//

let edadAntonella = 20
let edadMauro = 30

edadAntonella < edadMauro //es true//
edadAntonella > edadMauro //es false//


//AND, OR, NOT//  son &&, || ,!

// el and evalua de manera booleana, y te devuelve un booleano

min 11:30

let num1 = 2
let num2 = 2

num1 == num2 //nos devuelve true
true && false //nos devuelve false, el and nos devuelve true cuando ambas expresiones son verdaderas
true && true // nos devuelve true, porque ambas condiciones son verdaderas
false && false // es un false, porque no es una comparacion, es una evaluacion de expresiones, no esta viendo si ambas son iguales

num1 == num2 && true // es true
num1 == num2 && num1 < num2 // es false porque la segunda no es verdadera, no se cumple


// diferencia entre or y and, para que el and te devuelva un true todas las expresiones tienen que ser true, y para que el or te devuelva un true tiene que haber al menos un true


true || false //es true, si tengo al menos un true va a ser true
false || false //es false, porque si son todas false es false
false || false || true //es true porque hay un true



//NOT ! devuelve false si es true, lo niega 

let booleano = true //es true
!booleano //devuelve lo contrario a lo que es, en este caso es true y nos devuelve false
!true// es false
!false// es true 





