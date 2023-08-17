// Implemente a sequência de Collatz: comece com um número n e, se n for par, divida-o por 2; se for ímpar, multiplique por 3 e some 1. Repita o processo até n se tornar 1.

function collatz (n) {
 let sequencia = [n];

 while (n !== 1) {
  if(n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  sequencia.psuh(n);
 }
 return sequencia;

}

const inicioNumero = 10; // pode alterar esse numero.
const sequencia =collatz(inicioNumero); // const para integrar o inicio


console.log(inicioNumero);
console.log(sequencia);