import Calculo from "./calculo";

export default class Bhaskara extends Calculo{

    public calcular(num1: number, num2: number): number {
        return 0
    }

    public calcular3(num1: number, num2: number, num3:number):any{   
        let delta:number = (num2**2)-(4*num1*num3)

        if (delta < 0){
            console.log(`Cálculo complexo (delta negativo)`)
        } else if (delta === 0){
            return (-num2)/2*num1
        } else {
            let raiz1: number
            let raiz2: number
            raiz1 = (-num2 + Math.sqrt(delta)) / (2 * num1)
            raiz2 = (-num2 - Math.sqrt(delta)) / (2 * num1)

            return (`Raiz positiva: ${raiz1}\nRaiz negativa: ${raiz2}`)       
        }
    }
}  
    