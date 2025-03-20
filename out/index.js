"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var divisao_1 = __importDefault(require("./divisao"));
var multiplicacao_1 = __importDefault(require("./multiplicacao"));
var soma_1 = __importDefault(require("./soma"));
var subtracao_1 = __importDefault(require("./subtracao"));
var potenciacao_1 = __importDefault(require("./potenciacao"));
var radiciacao_1 = __importDefault(require("./radiciacao"));
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais s\u00E3o seus n\u00FAmeros e a opera\u00E7\u00E3o desejada?\n", (function (valor) {
        var instrucoes = valor.split(' ');
        var numero1 = Number(instrucoes[0]);
        var numero2 = Number(instrucoes[1]);
        var operacao = instrucoes[2];
        if (instrucoes.length == 1) {
            operacao = instrucoes[2];
        }
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
        switch (operacao) {
            case 'Somar':
                var calculo = new soma_1.default();
                console.log("Soma: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'Subtrair':
                calculo = new subtracao_1.default();
                console.log("Subtra\u00E7\u00E3o: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'Multiplicar':
                calculo = new multiplicacao_1.default();
                console.log("Multiplica\u00E7\u00E3o: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'Dividir':
                calculo = new divisao_1.default();
                console.log("Divis\u00E3o: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'Potencia':
                calculo = new potenciacao_1.default();
                console.log("Pot\u00EAncia: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'Radiciação':
                calculo = new radiciacao_1.default();
                console.log("Radicia\u00E7\u00E3o: ".concat(calculo.calcular(numero1, numero2)));
                break;
            case 'Sair':
        }
    }));
};
iniciar();
