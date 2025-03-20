import Calculo from "./calculo";

export default class Bhaskara extends Calculo{
    public num1:number
    public num2:number
    public num3:number

    constructor(num1:number, num2:number, num3:number){
        super()
        this.num1 = num1
        this.num2 = num2
        this.num3 = num3
    }

    public calcular(num1: number, num2: number): number {
        return 0
    }

    public calcular3(num1: number, num2: number, num3:number): number{   
        if (num3 == undefined){
            num3 = 0
        }
        return ((num2**2)-4*num1*num3)
    }
    public bhaskara():any{
        if (this.calcular3(this.num1, this.num2, this.num3) < 0){
            console.log(`Cálculo complexo`)
        } else if (this.calcular3(this.num1, this.num2, this.num3) === 0){
            return (-this.num2)/2*this.num1
        } else {
            let raiz1: number
            let raiz2: number
            raiz1 = (-this.num2)+Math.pow(this.calcular3(this.num1, this.num2, this.num3), 1/2)/2*this.num1
            raiz2 = (-this.num2)-Math.pow(this.calcular3(this.num1, this.num2, this.num3), 1/2)/2*this.num1

            return (`Raiz positiva: ${raiz1}\nRaiz negativa: ${raiz2}`)       
        }
    }
}  
    