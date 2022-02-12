import {first, Observable} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';

export class HttpClient {

    public get<T>(url: string, headers?: any): Observable<T> {
        return fromFetch<T>(url, {selector: response => response.json(), headers: headers}).pipe(first());
    }
}