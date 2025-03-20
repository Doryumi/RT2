import * as readline from 'readline'
import Divisao from "./divisao"
import Multiplicacao from "./multiplicacao"
import Soma from "./soma"
import Subtracao from "./subtracao"
import Potenciacao from './potenciacao'
import Radiciacao from './radiciacao'
import Bhaskara from './bhaskara'

let iniciar = () => {

    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor => {
        let instrucoes = valor.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operacao = instrucoes[2]
        if(instrucoes.length == 1){
            operacao = instrucoes[2]
        }
        console.log(`Estas foram suas instruções: ${instrucoes}\n`)
    
        switch (operacao){
            case 'Somar':
                let calculo = new Soma()
                console.log(`Soma: ${calculo.calcular(numero1,numero2)}`)
                break
            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`Subtração: ${calculo.calcular(numero1, numero2)}`)
                break
            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`Multiplicação: ${calculo.calcular(numero1, numero2)}`)
                break
            case 'Dividir':
                calculo = new Divisao()
                console.log(`Divisão: ${calculo.calcular(numero1, numero2)}`)
                break
            case 'Potencia':
                calculo = new Potenciacao()
                console.log(`Potência: ${calculo.calcular(numero1, numero2)}`)
                break
            case 'Radiciação':
                calculo = new Radiciacao()
                console.log(`Radiciação: ${calculo.calcular(numero1, numero2)}`)
                break
            case 'Sair': 
        }
    }))
}

iniciar()