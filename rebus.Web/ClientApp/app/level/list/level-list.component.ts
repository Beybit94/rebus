import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Level } from '../../model/Level'
import { LevelService } from '../service/level.service';

@Component({
    templateUrl: './level-list.component.html'
})
export class LevelListComponent implements OnInit
{
    levels: Level[];
    constructor(private levelService: LevelService) { }

    ngOnInit()
    {
        this.load();
    }

    load()
    {
        this.levelService.getLevels().subscribe((data: Level[]) => this.levels = data);
    }

    delete(id: number)
    {
        this.levelService.deleteLevel(id).subscribe(data => this.load());
    }

    save(item: Level)
    {
        this.levelService.saveLevel(item).subscribe(data => this.load());
    }
}