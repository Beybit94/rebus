import { Component, Input } from '@angular/core';
import { Rebus } from '../model/rebus';
@Component({
    selector: "rebus-form",
    templateUrl: './rebus-form.component.html'
})
export class RebusFormComponent
{
    @Input() rebus: Rebus;
}