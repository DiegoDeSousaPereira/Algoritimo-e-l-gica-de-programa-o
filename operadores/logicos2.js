//Exemplo de comprar a TV

let t1 = true;
let t2 = true;

const ComprarTv50 = t1 && t2;
console.log('Vamos comprar a TV de 50?" ' + ComprarTv50); //AND

const comprarTv32 = t1 !== t2
console.log('Vamos comprar a TV de 32?" ' + comprarTv32); //XOR

const tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete? ' + tomarSorvete)  //OR

const ficarEmCasa = !tomarSorvete
console.log('Vamos ficar em casa? ' + ficarEmCasa)  //NOT
