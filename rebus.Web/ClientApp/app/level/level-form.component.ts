import { Component, Input } from '@angular/core';
import { Level } from '../model/level';
@Component({
    selector: "level-form",
    template: `<div class="form-group">
    <label>Name</label>
    <input type="text" [(ngModel)]="level.name" class="form-control" />
</div>
<div class="form-group">
    <label>Is Pro</label>
    <input type="text" [(ngModel)]="level.isPro" class="form-control" />
</div>`
})
export class LevelFormComponent
{
    @Input() level: Level;
}