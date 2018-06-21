import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Rebus } from '../model/rebus';
import { Level } from '../model/Level';
@Component({
    selector: "rebus-form",
    templateUrl: './rebus-form.component.html'
})
export class RebusFormComponent
{
    @Input() levels: Level[];
    @Input() rebus: Rebus;

    selectLevel(value: any)
    {
        this.rebus.levelId = value;
    }
}