// Determine se um número é ímpar ou par utilizando uma estrutura if e o operador %.

const prompt = require('prompt-sync')();

function receber (){
  const numero = prompt ("digite um número :");
  return parseFloat(numero);

}

const entradaUsuario = receber();
if(entradaUsuario % 2 ===0)
  return console.log(entradaUsuario + "seu numero é par");
  else
  if (entradaUsuario %2 !== 0)
  return(console.log(entradaUsuario + "seu numero é impar"));



entradaUsuario();
