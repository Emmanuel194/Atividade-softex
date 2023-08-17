// Crie um programa que encontre o valor mais frequente em um array de números.

function maisFrequente (array) {
  const frenqueciaMap = [];


  for (const num of array) {
    if(frenqueciaMap[num]) {
      frenqueciaMap[num]++;
    } else {
      frenqueciaMap[num] = 1;
    }
  }

  let maximaFrequencia = 0;
  let valor = null;

  for(const num in frenqueciaMap) {
    if(frenqueciaMap[num] > maximaFrequencia) {
      maximaFrequencia = frenqueciaMap[num];
      valor = num;
    }
  }

    return valor;

}

const numeros = [2,3,5,7,8,9,7,9,8,3,4,5,6,7]
const valor = maisFrequente(numeros);

console.log(valor);