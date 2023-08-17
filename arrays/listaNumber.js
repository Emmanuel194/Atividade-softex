// Crie um array de números e ordene-o em ordem crescente.

const array = [1,2,5,7,30,1,6,8]


array.sort(function(a, b) {
  return a - b;
});

console.log(array);