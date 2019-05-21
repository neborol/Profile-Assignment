import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TService {
    constructor(private httpClient: HttpClient) {}

    getCustomData(): Observable<any> {
        return this.httpClient.get('http://api.apixu.com');
    }

}
