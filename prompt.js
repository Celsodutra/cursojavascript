const entrada = require('prompt-sync')({sigint: true});
var num; 

num = entrada("Digite o número: ");

var dobro = num * 2;


console.log(`O dobro é = ${dobro}`);


// É possível executar um programa através do comando no terminal: node programa1.js

/* É possível utilizar: 
console.log(`O dobro é = ${dobro}`);
ou
console.log("O dobro é " + dobro); */

