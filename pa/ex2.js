const input = require("readline-sync");

let númerogfinal = input.question("digite um numero mano 0~0")

for (let i =  0; i < númerogfinal; i++)  {
    if (i % 2 == 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é impar");
    }
}
