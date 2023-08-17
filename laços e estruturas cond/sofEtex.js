// Imprima os números de 1 a 50, mas para múltiplos de 3 imprima "Sof" e para múltiplos de 5 imprima "Tex".

for ( let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("softex");
  } else if (i % 3 === 0) {
    console.log("sof");
  } else if ( i % 5 === 0) {
    console.log ("tex");
  } else {
    console.log(i);
  }
}