import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

import { Rebus } from '../../model/Rebus'
import { RebusService } from '../service/rebus.service';
import { LevelService } from '../../level/service/level.service';
import { Level } from '../../model/Level';

@Component({
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
})
export class RebusListComponent
{
    list: Rebus[];
    item: Rebus;
    levels: Level[];
    state: string;
    constructor(private service: RebusService, private levelService: LevelService)
    {
        this.state = "inactive";
        this.item = this.emptyRebus();
    }

    ngOnInit()
    {
        this.load();
        this.loadLevels();
    }

    toggleState()
    {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    load()
    {
        this.toggleState();
        this.service.list().subscribe((data: Rebus[]) =>
        {
            this.list = data;
            this.toggleState();
        });
    }
    loadLevels()
    {
        this.toggleState();
        this.levelService.list().subscribe((data: Level[]) =>
        {
            this.levels = data;
            this.toggleState();
        });
    }

    delete(id: number)
    {
        this.toggleState();
        this.service.delete(id).subscribe(data =>
        {
            this.load()
            this.toggleState();
        });
    }

    save(item: Rebus)
    {
        this.toggleState();
        this.service.save(item).subscribe(data =>
        {
            this.load()
            this.toggleState();
        });
    }

    select(item: Rebus)
    {
        if (item) this.item = item;
        else this.item = this.emptyRebus();
    }

    emptyRebus()
    {
        return new Rebus(0, "", "", 0, null);
    }
}