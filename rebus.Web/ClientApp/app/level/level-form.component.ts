import { Component, Input } from '@angular/core';
import { Level } from '../model/level';
@Component({
    selector: "level-form",
    templateUrl: './level-form.component.html'
})
export class LevelFormComponent
{
    @Input() level: Level;
}