import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Rebus } from '../../model/Rebus'
import { RebusService } from '../service/rebus.service';

@Component({
    templateUrl: './rebus-list.component.html'
})
export class RebusListComponent
{
    list: Rebus[];
    item: Rebus;
    constructor(private service: RebusService)
    {
        this.item = this.emptyRebus();
    }

    ngOnInit()
    {
        this.load();
    }

    load()
    {
        this.service.list().subscribe((data: Rebus[]) => this.list = data);
    }

    delete(id: number)
    {
        this.service.delete(id).subscribe(data => this.load());
    }

    save(item: Rebus)
    {
        this.service.save(item).subscribe(data => this.load());
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