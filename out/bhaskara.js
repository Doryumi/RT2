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
    function Bhaskara(num1, num2, num3) {
        var _this = _super.call(this) || this;
        _this.num1 = num1;
        _this.num2 = num2;
        _this.num3 = num3;
        return _this;
    }
    Bhaskara.prototype.calcular = function (num1, num2) {
        return 0;
    };
    Bhaskara.prototype.calcular3 = function (num1, num2, num3) {
        if (num3 == undefined) {
            num3 = 0;
        }
        return ((Math.pow(num2, 2)) - 4 * num1 * num3);
    };
    Bhaskara.prototype.bhaskara = function () {
        if (this.calcular3(this.num1, this.num2, this.num3) < 0) {
            console.log("C\u00E1lculo complexo");
        }
        else if (this.calcular3(this.num1, this.num2, this.num3) === 0) {
            return (-this.num2) / 2 * this.num1;
        }
        else {
            var raiz1 = void 0;
            var raiz2 = void 0;
            raiz1 = (-this.num2) + Math.pow(this.calcular3(this.num1, this.num2, this.num3), 1 / 2) / 2 * this.num1;
            raiz2 = (-this.num2) - Math.pow(this.calcular3(this.num1, this.num2, this.num3), 1 / 2) / 2 * this.num1;
            return ("Raiz positiva: ".concat(raiz1, "\nRaiz negativa: ").concat(raiz2));
        }
    };
    return Bhaskara;
}(calculo_1.default));
exports.default = Bhaskara;
