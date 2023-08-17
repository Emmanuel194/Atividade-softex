// Conte quantas vogais há em uma string.

function contarVogais (str) {
  const contando = "aeiouAEIOU"
  let contar = 0;

  for (let char of str) {
    if(contando.includes(char)) {  //tag inclues para contar as vogais.
      contar++;
    }
  }

  return contar;

  
}

const nomeValidar = "hello world";
const contarVogais = contarVogais(nomeValidar);

console.log(contarVogais);