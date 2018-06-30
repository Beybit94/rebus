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
import { Rebus } from '../../model/Rebus';
import { RebusService } from '../service/rebus.service';
import { LevelService } from '../../level/service/level.service';
var RebusListComponent = /** @class */ (function () {
    function RebusListComponent(service, levelService) {
        this.service = service;
        this.levelService = levelService;
        this.state = "inactive";
        this.item = this.emptyRebus();
    }
    RebusListComponent.prototype.ngOnInit = function () {
        this.load();
        this.loadLevels();
    };
    RebusListComponent.prototype.toggleState = function () {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    };
    RebusListComponent.prototype.load = function () {
        var _this = this;
        this.toggleState();
        this.service.list().subscribe(function (data) {
            _this.list = data;
            _this.toggleState();
        });
    };
    RebusListComponent.prototype.loadLevels = function () {
        var _this = this;
        this.toggleState();
        this.levelService.list().subscribe(function (data) {
            _this.levels = data;
            _this.toggleState();
        });
    };
    RebusListComponent.prototype.delete = function (id) {
        var _this = this;
        this.toggleState();
        this.service.delete(id).subscribe(function (data) {
            _this.load();
            _this.toggleState();
        });
    };
    RebusListComponent.prototype.save = function (item) {
        var _this = this;
        this.toggleState();
        this.service.save(item).subscribe(function (data) {
            _this.load();
            _this.toggleState();
        });
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
            templateUrl: './rebus-list.component.html',
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
        __metadata("design:paramtypes", [RebusService, LevelService])
    ], RebusListComponent);
    return RebusListComponent;
}());
export { RebusListComponent };
//# sourceMappingURL=rebus-list.component.js.map