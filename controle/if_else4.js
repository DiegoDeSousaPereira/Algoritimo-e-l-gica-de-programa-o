let hora =4;
let saudacao;

if (hora >=8 && hora <= 12) {
    saudacao = "Bom dia! Em que podemos ajudar?";
} else if (hora >12  && hora < 18) {
    saudacao = "Boa tarde! Em que podemos ajudar?";
}  else if (hora >= 18 && hora < 22) {
    saudacao = "Boa noite! Em que podemos ajudar?";
}  else if (hora >= 22 && hora <=24  || hora < 8) //CASO NENHUM DOS CASOS FOREM VERDADEIROS VAI REPRODUZIR O ELSE ABAIXO
    saudacao = "Estamos fechados!"
    else 
        saudacao = "Hora invalida"
    


console.log(saudacao);