function caixaEletronico(valor){
  valor = prompt("Digite o valor que gostaria de sacar");
  //notas disponíveis = 10,20,50,100
  let notasDez, notasVinte, notasCinquenta, notasCem;
  let subCem, subCinquenta, subVinte, subDez; // variáveis que irão subtrair o valor total assim que discubertas as notas

  // variáveis que controlam o texto =>>
  let textoCem = "" ; 
  let textoCiquenta = "";
  let textoVinte = ""; 
  let textoDez = "";

  if(valor == number ){
    notasCem = Math.floor(valor/100);
    subCem = notasCem * 100;
    valor = valor - subCem;
    // sequência que descobre quantas notas de 100 são necessárias;

    notasCinquenta = Math.floor(valor/50);
    subCinquenta = notasCinquenta * 50;
    valor = valor - subCinquenta;
    // sequência que descobre quantas notas de 50 são necessárias;

    notasVinte = Math.floor(valor/20);
    subVinte = notasVinte * 20 ;
    valor = valor - subVinte;
    // sequência que descobre quantas notas de 20 são ncessárias;

    notasDez = Math.floor(valor/10);
    subDez = notasDez * 10;
    valor = valor - subDez;
    //sequência que descobre quantas notas de 10 são necessárias;

    if(notasCem > 1) {
      textoCem = "$notasCem$ notas de RS100,00"  
    }else if(notasCem == 1 ){
      textoCem = "$notasCem$ nota de R$100,00";
    }


    if(notasVinte > 1) {
      textoCem = "$notasVinte$ notas de RS20,00"  
    }else if(notasVinte == 1 ){
      textoCem = "$notasVinte$ nota de R$20,00";

    }

    if(notasDez> 1) {
      textoCem = "$notasDez$ notas de RS10,00"  
    }else if(notasDez == 1 ){
      textoCem = "$notasDez$ nota de R$10,00";

    }

    if(notasCinquenta > 1) {
      textoCem = "$notasCinquenta$ notas de RS50,00"  
    }else if(notasCinquenta == 1 ){
      textoCem = "$notasCinquenta$ nota de R$50,00";

    }





    console.log(        )


     
}




}