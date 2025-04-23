const {separador, separadorSlash } = require('./utils.js')

let x = [1,2,3,4,5,6,7,8,9,10]

const [y, z] = x;


console.log("el valor de x: ",x);
console.log("el valor de y: ",y);
console.log("el valor de z: ",z);

separador()

let miArray = [y, z, x, x, x, y, z, y, z]
x = miArray
let [a, b, c, d, e] = x//[y, z];

console.log(miArray)

console.log("el valor de a: ", a);
console.log("el valor de b: ", b);
console.log("el valor de c: ", c);
console.log("el valor de d: ", d);
console.log("el valor de e: ", e);

a = b

separadorSlash()
console.log("El nuevo valor de a es:",a)

separadorSlash()

let var1 = 10;
let var2 = 20;

[var1, var2] = [var2, var1];

const miObjeto = {
    nombre: "Gustavo",
    materia: "Backend",
    turno: "Noche",
    nota: 10
}


console.log(miObjeto)

separador()

miObjeto.debeCorrelativa = false

console.log(miObjeto)

separador()

miObjeto.nuevaPropiedad = {otraPropiedad: "false"}
//No se puede reasignar un nuevo objeto a "miObjeto" pero le puedo agregar propiedades al mismo objeto o cambiar valores de las propiedades ya definidas
//miObjeto = {otraPropiedad: "false"}
console.log(miObjeto)

separador()



const { nombre } = miObjeto
miObjeto.nombre = "Gonzalo"

// NO SE PUEDE REASIGNAR EL VALOR DE UN COST
// nombre = miObjeto.nombre


nombre = "Nuevo Nombre"

console.log(nombre)
