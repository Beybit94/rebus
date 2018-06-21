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
import { Rebus } from '../../model/Rebus';
import { RebusService } from '../service/rebus.service';
import { LevelService } from '../../level/service/level.service';
var RebusListComponent = /** @class */ (function () {
    function RebusListComponent(service, levelService) {
        this.service = service;
        this.levelService = levelService;
        this.item = this.emptyRebus();
    }
    RebusListComponent.prototype.ngOnInit = function () {
        this.load();
        this.loadLevels();
    };
    RebusListComponent.prototype.load = function () {
        var _this = this;
        this.service.list().subscribe(function (data) { return _this.list = data; });
    };
    RebusListComponent.prototype.loadLevels = function () {
        var _this = this;
        this.levelService.list().subscribe(function (data) { return _this.levels = data; });
    };
    RebusListComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (data) { return _this.load(); });
    };
    RebusListComponent.prototype.save = function (item) {
        var _this = this;
        this.service.save(item).subscribe(function (data) { return _this.load(); });
    };
    RebusListComponent.prototype.select = function (item) {
        if (item)
            this.item = item;
        else
            this.item = this.emptyRebus();
    };
    RebusListComponent.prototype.emptyRebus = function () {
        return new Rebus(0, "", "", 0, null);
    };
    RebusListComponent = __decorate([
        Component({
            templateUrl: './rebus-list.component.html'
        }),
        __metadata("design:paramtypes", [RebusService, LevelService])
    ], RebusListComponent);
    return RebusListComponent;
}());
export { RebusListComponent };
//# sourceMappingURL=rebus-list.component.js.map