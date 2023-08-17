// Crie um programa que some os elementos de dois arrays de mesma dimensão, criando um terceiro array com os resultados.
function sumArrays (array1, array2){
  if(array1.lenght !== array2.lenght) {
    return Error ("os arrays devem ter a mesma dimensão.");
  }


const resultadoArray = [];

for(let i = 0; i < array1.length; i++) {
  resultadoArray.push(array1[i] + array2[i]);
}

return resultadoArray
}


const array1 = [1,2,3,4,5];
const array2 = [5,4,3,2,1];

const sumResultado = sumArrays(array1, array2);

console.log(array1); // array 1
console.log(array2); // arry 2
console.log(sumResultado); // a soma dos resultado