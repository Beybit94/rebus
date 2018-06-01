var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LevelService = /** @class */ (function () {
    function LevelService(http) {
        this.http = http;
        this.url = "api/Level";
    }
    LevelService.prototype.getLevels = function () {
        return this.http.get(this.url, { responseType: 'json' });
    };
    LevelService.prototype.getLevel = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    LevelService.prototype.saveLevel = function (level) {
        if (level.id) {
            return this.http.put(this.url + '/' + level.id, level);
        }
        else {
            return this.http.post(this.url, level);
        }
    };
    LevelService.prototype.deleteLevel = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    LevelService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], LevelService);
    return LevelService;
}());
export { LevelService };
//# sourceMappingURL=level.service.js.map