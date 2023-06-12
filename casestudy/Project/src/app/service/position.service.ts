import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  API = 'http://localhost:3000/positions';
  constructor(private httpClient: HttpClient) { }
  getAllPosition(): Observable<Position[]> {
    return this.httpClient.get<Position[]>(this.API);
  }

  findById(id: number): Observable<Position> {
    return this.httpClient.get<Position>(this.API + '/' + id);
  }
}

