import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '../services/http-client.service';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class HitsService extends HttpClient {

  getAllHits(): Observable<Response> {
    const url = `${environment.BASE_URL_API}/search_by_date?query=nodejs`;
    return this.get(url);
  }

}

