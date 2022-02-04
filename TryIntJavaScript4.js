const nombre = "Jazmin Giles";
let edad = 42;

let condicion = edad >= 18;
let condicion2 = nombre === "Jazmin Giles";

console.log("condicion =>", condicion);
console.log("condicion2 =>", condicion2);

if (condicion || condicion2){
    console.log(`Es verdadero`)
}else{
    console.log(`Es falso`)
}