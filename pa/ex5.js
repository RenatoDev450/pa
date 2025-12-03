const input = require("readline-sync");

let numero = input.questionInt("digite um numero para eu fazer a tabuada:");
console.log("--------´tabuada do ", numero, "-----" )
for (let i = 1; i <10; i++) {

console.log(i + "x" + numero + "=" + i * numero)

}
console.log