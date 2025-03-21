"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = __importDefault(require("./calculo"));
var Bhaskara = /** @class */ (function (_super) {
    __extends(Bhaskara, _super);
    function Bhaskara() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bhaskara.prototype.calcular = function (num1, num2) {
        return 0;
    };
    Bhaskara.prototype.calcular3 = function (num1, num2, num3) {
        var delta = (Math.pow(num2, 2)) - (4 * num1 * num3);
        if (delta < 0) {
            console.log("C\u00E1lculo complexo (delta negativo)");
        }
        else if (delta === 0) {
            return (-num2) / 2 * num1;
        }
        else {
            var raiz1 = void 0;
            var raiz2 = void 0;
            raiz1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
            raiz2 = (-num2 - Math.sqrt(delta)) / (2 * num1);
            return ("Raiz positiva: ".concat(raiz1, "\nRaiz negativa: ").concat(raiz2));
        }
    };
    return Bhaskara;
}(calculo_1.default));
exports.default = Bhaskara;
