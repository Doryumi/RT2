import Calculo from "./calculo";

export default class Radiciacao extends Calculo{
    public calcular(num1: number, num2: number): number {
        return Math.pow(num1, 1/num2)
    }
    public calcular3(num1: number, num2: number, num3?: number): number {
        return 0
    }
}