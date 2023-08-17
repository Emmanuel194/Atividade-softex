// Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).

const prompt = require ('prompt-sync')();

function palin (){
  const palavra = prompt("Digite uma nome que seja palindromo: ")
  return parseFloat(palavra);
}

const primeiraLetra = palavra.charAt(0);
const ultimaLetra = palavra.charAt(palavra.lenght - 1);
const nome = palin();
if(primeiraLetra == ultimaLetra){
  return console.log("este nome é um palindromo")
}


nome();