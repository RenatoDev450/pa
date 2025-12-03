const input = require("readline-sync");
let soma = 0;

for(let contador = 0; contador <5; contador++){
let numero = input.questionInt("[digite um numero mano (0~0)]"+ (contador + 1) + "[porfavor]")    

soma = soma + numero 


}
console.log("a soma dos 5 numeros é",soma)
