let estouComSaude = true;
let estaEnsolarado = true;
let tenhoGardaChuva = false;


//Exemplo do AND
//Tenho que ter 2 condições true para ser true
console.log(estouComSaude && estaEnsolarado)

//Exemplo do OR
//Tenho que ter 1 resultado true para o resultado ser true
console.log(estaEnsolarado || tenhoGardaChuva)

//Exemplo do XOR(Ou exclusivo)
//O resultado tem que ser diferente, se for igual o resultado sera falso.
console.log(estaEnsolarado != tenhoGardaChuva)
console.log(true != false)
console.log(false != true)


//Exemplo do NOT
console.log("\nese resultado é verdadeiro(OLHE ESSE CODIGO): " + !false)
console.log("Esse resultado é false:(OLHE ESSE CODIGO) " + !true)