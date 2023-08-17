// Verifique se um número é positivo, negativo ou zero usando declarações if, else if e else.

const prompt = require('prompt-sync')();

function recebeNumero (){
  const numero = prompt("digite um número: ");
  return parseFloat(numero);
  
};

  const numeroUser = recebeNumero();
  if (numeroUser > 0)
  return console.log(numeroUser +  " é positivo");
  else
  if (numeroUser != 1)
  return console.log(numeroUser + "eh negativo");
  else
  return ("nem positivo nem negativo, nulo");



numeroUser();