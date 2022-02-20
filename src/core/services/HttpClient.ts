import {first, Observable} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';

export class HttpClient {
    private static instance?: HttpClient;

    private constructor(){
    }

    public static getInstance(): HttpClient{
        if (!HttpClient.instance) {
            HttpClient.instance = new HttpClient();
        }
        return HttpClient.instance;
    }

    public get<T>(url: string, headers?: any): Observable<T> {
        return fromFetch<T>(url, {selector: response => response.json(), headers}).pipe(first());
    }
}