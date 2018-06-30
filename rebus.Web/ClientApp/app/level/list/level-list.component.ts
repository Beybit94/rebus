import { Component, OnInit } from '@angular/core';
import{trigger,state,style,animate,transition} from '@angular/animations';
import { Router } from '@angular/router';

import { Level } from '../../model/Level';
import { LevelService } from '../service/level.service';

@Component({
    templateUrl: "./level-list.component.html",
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
export class LevelListComponent implements OnInit
{
    list: Level[];
    item: Level;
    state: string;
    constructor(private service: LevelService) {
        this.state = "inactive";
        this.item = this.emptyLevel();
    }

    ngOnInit()
    {
        this.load();
    }

    toggleState()
    {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }

    load()
    {
        this.toggleState();
        this.service.list().subscribe((data: Level[]) =>
        {
            this.list = data;
            this.toggleState();
        });
    }

    delete(id: number)
    {
        this.toggleState();
        this.service.delete(id).subscribe(data => {
            this.load();
            this.toggleState();
        });
    }

    save(item: Level)
    {
        this.toggleState();
        this.service.save(item).subscribe(data => {
            this.load();
            this.toggleState();
        });
    }

    select(item: Level)
    {
        if (item) this.item = item;
        else this.item = this.emptyLevel();
    }

    emptyLevel()
    {
        return new Level(0, "", false, null);
    }
}