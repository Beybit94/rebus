import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LevelListComponent } from './level/list/level-list.component';
import { RebusComponent } from './rebus/rebus.component';
import { NotFoundComponent } from './not-found.component';

import { LevelService } from './level/service/level.service';
// определение маршрутов
const appRoutes: Routes = [
    { path: '', component: LevelListComponent },
    { path: 'level', component: LevelListComponent },
    { path: 'rebus', component: RebusComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        HomeComponent,
        LevelListComponent,
        RebusComponent,
        NotFoundComponent
    ],
    providers: [LevelService], // регистрация сервисов
    bootstrap: [AppComponent]
})
export class AppModule { }