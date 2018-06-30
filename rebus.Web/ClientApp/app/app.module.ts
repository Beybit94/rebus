import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

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
const appRoutes: Routes = [
    { path: '', component: LevelListComponent },
    { path: 'level', component: LevelListComponent },
    { path: 'rebus', component: RebusListComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        HomeComponent,
        LevelListComponent,
        LevelFormComponent,
        RebusListComponent,
        RebusFormComponent,
        NotFoundComponent
    ],
    providers: [LevelService, RebusService], // регистрация сервисов
    bootstrap: [AppComponent]
})
export class AppModule { }