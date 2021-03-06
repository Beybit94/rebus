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
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Level } from '../../model/Level';
import { LevelService } from '../service/level.service';
var LevelListComponent = /** @class */ (function () {
    function LevelListComponent(service) {
        this.service = service;
        this.state = "inactive";
        this.item = this.emptyLevel();
    }
    LevelListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    LevelListComponent.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    LevelListComponent.prototype.load = function () {
        var _this = this;
        this.toggleState();
        this.service.list().subscribe(function (data) {
            _this.list = data;
            _this.toggleState();
        });
    };
    LevelListComponent.prototype.delete = function (id) {
        var _this = this;
        this.toggleState();
        this.service.delete(id).subscribe(function (data) {
            _this.load();
            _this.toggleState();
        });
    };
    LevelListComponent.prototype.save = function (item) {
        var _this = this;
        this.toggleState();
        this.service.save(item).subscribe(function (data) {
            _this.load();
            _this.toggleState();
        });
    };
    LevelListComponent.prototype.select = function (item) {
        if (item)
            this.item = item;
        else
            this.item = this.emptyLevel();
    };
    LevelListComponent.prototype.emptyLevel = function () {
        return new Level(0, "", false, null);
    };
    LevelListComponent = __decorate([
        Component({
            templateUrl: "./level-list.component.html",
            animations: [
                trigger('requestState', [
                    state('inactive', style({
                        backgroundColor: '#eee',
                        transform: 'scale(1)'
                    })),
                    state('active', style({
                        backgroundColor: '#cfd8dc',
                        transform: 'scale(1.1)'
                    })),
                    transition('inactive => active', animate('100ms ease-in')),
                    transition('active => inactive', animate('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [LevelService])
    ], LevelListComponent);
    return LevelListComponent;
}());
export { LevelListComponent };
//# sourceMappingURL=level-list.component.js.map