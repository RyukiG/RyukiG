/*var nome = prompt("Digite o seu nome: ")
var idade = prompt("Digit a sua idade: ")
var idade2 = 20;

console.log(idade)
console.log(idade2)

document.write('<h1>Ola ' + nome + ' . Você tem ' + idade + ' Anos. </h1>');
*/
var n = Number(prompt("Digite um número:"));
var soma = 0;

for (var i = 1; i <= n; i++) {
  soma += i; // Aqui tava o erro! Tem que somar o i, não 1.
}

console.log("Resultado final da soma:", soma);
    
