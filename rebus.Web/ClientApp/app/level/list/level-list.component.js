var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LevelService } from '../service/level.service';
var LevelListComponent = /** @class */ (function () {
    function LevelListComponent(levelService) {
        this.levelService = levelService;
    }
    LevelListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    LevelListComponent.prototype.load = function () {
        var _this = this;
        this.levelService.getLevels().subscribe(function (data) { return _this.levels = data; });
    };
    LevelListComponent = __decorate([
        Component({
            templateUrl: './level-list.component.html'
        }),
        __metadata("design:paramtypes", [LevelService])
    ], LevelListComponent);
    return LevelListComponent;
}());
export { LevelListComponent };
//# sourceMappingURL=level-list.component.js.map