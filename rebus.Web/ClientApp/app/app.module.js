var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LevelListComponent } from './level/list/level-list.component';
import { LevelFormComponent } from './level/level-form.component';
import { RebusListComponent } from './rebus/list/rebus-list.component';
import { RebusFormComponent } from './rebus/rebus-from.component';
import { NotFoundComponent } from './not-found.component';
import { LevelService } from './level/service/level.service';
import { RebusService } from './rebus/service/rebus.service';
// определение маршрутов
var appRoutes = [
    { path: '', component: LevelListComponent },
    { path: 'level', component: LevelListComponent },
    { path: 'rebus', component: RebusListComponent },
    { path: '**', component: NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
            declarations: [
                AppComponent,
                HomeComponent,
                LevelListComponent,
                LevelFormComponent,
                RebusListComponent,
                RebusFormComponent,
                NotFoundComponent
            ],
            providers: [LevelService, RebusService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map