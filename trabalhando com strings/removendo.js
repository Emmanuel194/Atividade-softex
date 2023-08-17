// Remova os espaços em branco de uma string.

const espaco = "oi tudo otimo contigo"
const tirando = espaco.replace(/\s+/g, ''); // tag replace para tirar espaços

console.log(tirando);