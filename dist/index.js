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
Object.defineProperty(exports, "__esModule", { value: true });
var Vnnative3GeolocationBase_1 = require("./libs/Vnnative3GeolocationBase");
var Vnnative3GeolocationIndex = /** @class */ (function (_super) {
    __extends(Vnnative3GeolocationIndex, _super);
    function Vnnative3GeolocationIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vnnative3GeolocationIndex;
}(Vnnative3GeolocationBase_1.Vnnative3GeolocationBase));
var Vnnative3Geolocation = new Vnnative3GeolocationIndex;
exports.default = Vnnative3Geolocation;
