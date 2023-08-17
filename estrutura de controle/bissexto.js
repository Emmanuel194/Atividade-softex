// Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).

function anoBissexto(ano){
 if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  return true;
 } else {
  return false;
 }
} 

const ano = 2020;

if(anoBissexto(ano)){
  console.log(ano + "é um ano bisexto.")
} else {
  console.log(ano + "naõ é um ano bisexto.")
}


ano();
