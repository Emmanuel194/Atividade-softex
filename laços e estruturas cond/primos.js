// Verifique se um número é primo ou não.

function ePrimo (number){
 if(number <= 1) {
  return console.log("este numero nao é primo");
 } else{
  if (number <= 3){
    console.log("este numero é primo");
  }
 }
}

const numeroInicio = 15;
if(ePrimo(numeroInicio)){
  console.log(numeroInicio)
}
