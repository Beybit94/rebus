import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Level } from '../../model/Level'
import { LevelService } from '../service/level.service';

@Component({
    templateUrl: './level-list.component.html'
})
export class LevelListComponent implements OnInit
{
    list: Level[];
    item: Level;
    constructor(private service: LevelService)
    {
        this.item = this.emptyLevel();
    }

    ngOnInit()
    {
        this.load();
    }

    load()
    {
        this.service.list().subscribe((data: Level[]) => this.list = data);
    }

    delete(id: number)
    {
        this.service.delete(id).subscribe(data => this.load());
    }

    save(item: Level)
    {
        this.service.save(item).subscribe(data => this.load());
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