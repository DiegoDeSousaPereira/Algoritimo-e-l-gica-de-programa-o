let nota = 10;

switch(Math.floor(nota)) {
    case 10:
        console.log("Parabéns")
        break;
    case 3:
        console.log("Reprovado")
      break
    case 1:
        console.log("muito reprovado")
}
console.log("fim")


switch(Math.floor(nota)) {// "Match.ceil" arredonda para cima o  "Match.floor" arredonda para baixo.
    case 10:  
    case 9:    
    case 8:
    case 7:
        console.log("Aprovado na media")
        break;
    default:// caso nao caia em nenhum case cai no default
    console.log("Nota Invalida")
}