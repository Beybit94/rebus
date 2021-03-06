var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Level } from '../model/level';
var LevelFormComponent = /** @class */ (function () {
    function LevelFormComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Level)
    ], LevelFormComponent.prototype, "level", void 0);
    LevelFormComponent = __decorate([
        Component({
            selector: "level-form",
            template: "<div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"level.name\" class=\"form-control\" />\n</div>\n<div class=\"form-group\">\n    <label>Is Pro</label>\n    <input type=\"text\" [(ngModel)]=\"level.isPro\" class=\"form-control\" />\n</div>"
        })
    ], LevelFormComponent);
    return LevelFormComponent;
}());
export { LevelFormComponent };
//# sourceMappingURL=level-form.component.js.map