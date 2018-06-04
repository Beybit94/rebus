import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rebus } from '../../model/Rebus'

@Injectable()
export class RebusService
{
    private url = "api/Rebus";

    constructor(private http: HttpClient) { }

    list()
    {
        return this.http.get(this.url, { responseType: 'json' });
    }

    get(id: number)
    {
        return this.http.get(this.url + '/' + id);
    }

    save(rebus: Rebus)
    {
        if (rebus.id)
        {
            return this.http.put(this.url + '/' + rebus.id, rebus);
        } else
        {
            return this.http.post(this.url, rebus);
        }
    }

    delete(id: number)
    {
        return this.http.delete(this.url + '/' + id);
    }
}