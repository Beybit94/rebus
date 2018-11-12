var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AnimateComponent = /** @class */ (function () {
    function AnimateComponent() {
    }
    AnimateComponent = __decorate([
        Component({
            selector: 'app-animate',
            template: "<div class=\"myblock mx-auto\"></div>",
            styles: ["\n    .myblock {\n    background-color: green;\n    width: 300px;\n    height: 250px;\n    border-radius: 5px;\n    margin: 5rem;\n  }\n"]
        })
    ], AnimateComponent);
    return AnimateComponent;
}());
export { AnimateComponent };
//# sourceMappingURL=animate.component.js.map