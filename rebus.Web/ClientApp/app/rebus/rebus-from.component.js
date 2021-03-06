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
import { Rebus } from '../model/rebus';
var RebusFormComponent = /** @class */ (function () {
    function RebusFormComponent() {
    }
    RebusFormComponent.prototype.selectLevel = function (value) {
        this.rebus.levelId = value;
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], RebusFormComponent.prototype, "levels", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Rebus)
    ], RebusFormComponent.prototype, "rebus", void 0);
    RebusFormComponent = __decorate([
        Component({
            selector: "rebus-form",
            templateUrl: './rebus-form.component.html'
        })
    ], RebusFormComponent);
    return RebusFormComponent;
}());
export { RebusFormComponent };
//# sourceMappingURL=rebus-from.component.js.map