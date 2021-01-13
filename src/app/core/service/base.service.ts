import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppInjector } from './app.injector';

import { Observable } from 'rxjs';

import { SERVER_URL } from '../../../environments/environment';

export abstract class BaseService {

    protected http: HttpClient = AppInjector.get(HttpClient);

    constructor() {}

    get(url: string, params: HttpParams = null): Observable<Object> {
        return this.http.get(SERVER_URL + url, {
            headers: this.getHeaders(),
            params: params
        });
    }

    post(url: string, body: Object = {}) {
        return this.http.post(SERVER_URL + url, body, {
            headers: this.getHeaders()
        });
    }

    put(url: string, body: Object = {}): Observable<Object> {
        return this.http.put(SERVER_URL + url, body, {
            headers: this.getHeaders()
        });
    }

    patch(url: string, body: Object = {}): Observable<Object> {
        return this.http.patch(SERVER_URL + url, body, {
            headers: this.getHeaders()
        });
    }

    delete(url: string) {
        return this.http.delete(SERVER_URL + url, { headers: this.getHeaders() });
    }

    protected customHeaders(httpHeaders: HttpHeaders): void { }

    protected getHeaders(): HttpHeaders {
        let httpHeaders: HttpHeaders;
        this.customHeaders(httpHeaders);
        return httpHeaders;
    }
}
