import { Injectable } from '@angular/core';
import { Http, Response, Headers, ResponseOptions, ResponseContentType, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClient {

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http) {
  }

  get(url: string): Observable<Response> {
    return this.http.get(url);
  }

  delete(url: string): Observable<Response> {
    return this.http.delete(url, { headers: this.headers });
  }

  post(url: string, data: any): Observable<Response> {
    return this.http.post(url, (data instanceof Array || data instanceof Object) ? JSON.stringify(data) : data, { headers: this.headers });
  }

  put(url, data: any): Observable<Response> {
    return this.http.put(url, (data instanceof Array || data instanceof Object) ? JSON.stringify(data) : data, { headers: this.headers });
  }

  patch(url, data: any): Observable<Response> {
    return this.http.patch(url, (data instanceof Array || data instanceof Object) ? JSON.stringify(data) : data, { headers: this.headers });
  }

}
