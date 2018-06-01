import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Level } from '../../model/Level'

@Injectable()
export class LevelService
{
    private url = "api/Level";

    constructor(private http: HttpClient) { }

    getLevels()
    {
        return this.http.get(this.url, { responseType: 'json'});
    }

    getLevel(id: number)
    {
        return this.http.get(this.url + '/' + id);
    }

    saveLevel(level: Level)
    {
        if (level.id)
        {
            return this.http.put(this.url + '/' + level.id, level);
        } else
        {
            return this.http.post(this.url, level);
        }
    }

    deleteLevel(id: number)
    {
        return this.http.delete(this.url + '/' + id);
    }
}