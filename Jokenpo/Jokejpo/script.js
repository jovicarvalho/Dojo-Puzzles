function juizJokenpo(jogadorUm,jogadorDois){
  jogadorUm = prompt("Insira a escolha do primeiro jogador:")
  
  if( jogadorUm == "pedra" || jogadorUm == "tesoura" ||jogadorUm == "papel"){

    jogadorDois = prompt("Insira a escolha do segundo jogador:")
  } else {
    console.log("Jogada inválida, reinicie o programa");
  }

  let resultado

  if (jogadorUm == jogadorDois){
    resultado = "Empate";
  } else if(jogadorUm == "pedra" && jogadorDois == "tesoura"){
    resultado = "O primeiro jogador ganhou!";
  } else if(jogadorUm == "papel" && jogadorDois =="tesoura"){
    resultado = "O segundo jogador ganhou!";
  } else if(jogadorUm == "pedra" && jogadorDois == "papel" ){
    resultado = "O segundo jogador ganhou!";
  } else if(jogadorUm == "papel" || jogadorDois == "pedra"){
    resultado = "O primeiro jogador ganhou!";
  } else if(jogadorUm == "tesoura" || jogadorDois == "pedra"){
    resultado = "O segundo jogador ganhou!";
  } else if(jogadorUm == "tesoura" || jogadorDois== "papel"){
  }


return resultado;

}