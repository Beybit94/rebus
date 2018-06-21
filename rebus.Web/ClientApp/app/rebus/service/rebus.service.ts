import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rebus } from '../../model/Rebus'

@Injectable()
export class RebusService
{
    private url = "api/Rebus/";

    constructor(private http: HttpClient) { }

    list()
    {
        return this.http.get(this.url +'List/', { responseType: 'json' });
    }

    get(id: number)
    {
        return this.http.get(this.url + 'Get/' + id, { responseType: 'json' });
    }

    save(rebus: Rebus)
    {
        if (rebus.id && rebus.id != 0)
        {
            return this.http.put(this.url + 'Edit/', rebus, { responseType: 'json' });
        } else
        {
            return this.http.post(this.url + 'Create/', rebus, { responseType: 'json' });
        }
    }

    delete(id: number)
    {
        return this.http.delete(this.url + 'Delete/' + id, { responseType: 'json' });
    }
}