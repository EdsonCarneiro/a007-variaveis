let nome
let idade
console.log(typeof nome);
console.log(typeof idade);
// Foi impresso como indefinido porque não definimos as variaveis.

nome=prompt("Qual o seu nome?")
idade= prompt("Qual a sua idade?")
console.log(typeof nome);
console.log(typeof idade);
// Eu notei que as respostas do prompt são sempre tidas como string.

console.log("Olá",nome, ",você tem",idade, "anos.");
