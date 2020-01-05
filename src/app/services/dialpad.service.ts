import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

declare var require: any;

@Injectable({
  providedIn: 'root'
})


export class DialpadService {

  public host = require('../../assets/JSON/config.json').api;



  constructor(
    private http: HttpClient
  ) { }


  public getDialpad() {
    return this.http.get<any>(this.host + 'get-dialpad');
  }

  public callHero(number: any, values) {
    let parameters = new HttpParams();
    parameters = parameters.append('number', number);
    parameters = parameters.append('values', values);
    return this.http.get<any>(this.host + 'call-superhero', { params: parameters });
  }
}
