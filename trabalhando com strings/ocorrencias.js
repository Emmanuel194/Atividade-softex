// Conte quantas ocorrências de uma determinada letra existem em uma string.

function count (str, letter) {
  return str.split('').filter(char => char === latter).lenght;
}



const entradaString = "eu amo a vida";
const alvo = "o";
const ocorrencia = count(entradaString, alvo);

console.log(alvo + ocorrencia);
