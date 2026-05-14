import readline = require('readline-sync')

console.clear()

const peso:number = redline.questionFloat("Informe seu peso: ")
const altura:number = redline.questionFloat("Informe sua altura: ")

let situacao:string

const imc = peso / (altura * altura

    if (imc < 18.5) {
      console.log('Classificação: Baixo peso')
    } 
    else if (imc <"18.5 a 24.9") {
      console.log('Classificação: Peso normal')
    } 
    else if (imc < "25.0 a 29.9") {
      console.log('Classificação: Excesso de peso')
    }
    else if (imc <"30.0 a 34.9") {
      console.log('Classificação: Obesidade de classe 1')
    } 
    else if (imc <"35.0 a 39.9") {
      console.log('Classificação: Obesidade de classe 2')
    }
    else if (imc < "40") {
      console.log('Classificação: Obesidade de classe 3')
    }

   

