const nome = prompt("Qual é o seu nome?")
const anoNascimento = number(prompt("Qual seu ano de nascimento?"))

const anoAtual = new Date().getFullYear()
const idade = anoAtual - anoNascimento

console.log('Nome: ${nome}')
console.log('Idade: ${idade}')
