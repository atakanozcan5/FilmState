import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddingFilm {

    constructor(private http: HttpClient) { }

    getCountries() {
    return this.http.get<any>('assets/countries.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}