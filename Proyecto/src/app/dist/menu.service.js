"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuService = void 0;
var core_1 = require("@angular/core");
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.Cargar = function (archivos) {
        for (var _i = 0, archivos_1 = archivos; _i < archivos_1.length; _i++) {
            var archivo = archivos_1[_i];
            var script = document.createElement("script");
            script.src = "./assets/js/" + archivo + ".js";
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(script);
        }
    };
    MenuService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
