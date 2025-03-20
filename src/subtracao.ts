import Calculo from "./calculo";

export default class Subtracao extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1-num2
    }
    public calcular3(num1: number, num2: number, num3?: number): number {
        return 0
    }
}