import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Level } from '../../model/Level';

@Injectable()
export class LevelService
{
    private url = "api/Level/";

    constructor(private http: HttpClient) { }

    list()
    {
        return this.http.get(this.url + 'List/', { responseType: 'json' });
    }

    get(id: number)
    {
        return this.http.get(this.url + 'Get/' + id, { responseType: 'json' });
    }

    save(level: Level)
    {
        if (level.id && level.id != 0)
        {
            return this.http.put(this.url + 'Edit/', level, { responseType: 'json' });
        } else
        {
            return this.http.post(this.url + 'Create/', level, { responseType: 'json' });
        }
    }

    delete(id: number)
    {
        return this.http.delete(this.url + 'Delete/' + id, { responseType: 'json' });
    }
}