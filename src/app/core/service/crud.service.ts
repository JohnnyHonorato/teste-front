import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class CrudService extends BaseService {
 
    constructor() {
        super();
    }

    insert(url: string, item: Object): Observable<Object> {
        return this.post(url, item);
    }

    update(url: string, id: any, item: Object): Observable<Object> {
        return this.put(url + '/' + id, item);
    }

    updatePartial(url: string, id: number, item: Object): Observable<Object> {
        return this.patch(url + '/' + id, item);
    }

    remove(url: string, id: number) {
        return this.delete(url + '/' + id);
    }
}
