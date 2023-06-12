import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Level } from '../model/level';
import {Observable} from 'rxjs';
import {Part} from '../model/part';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  API = ' http://localhost:3000/levels';
  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  getAllLevel(): Observable<Level[]> {
    return this.httpClient.get<Level[]>(this.API);
  }
  findById(id: number): Observable<Level> {
    return this.httpClient.get<Level>(this.API + '/' + id);
  }
}
